import z, { email } from "zod";

export const OnboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),
    subIndustry: z.string({
        required_error: "Please select a specialization",
    }),
    bio: z.string().max(500).optional(),
    experince: z
        .string()
        .transform((val) => parseInt(val, 10))
        .pipe(
            z
                .number()
                .min(0, "Experience must be at least 0 years")
                .max(50, "Experience must be less than 50 years")
        ),
    skills: z.string().transform((val) => 
        val
            ? val
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean)
            : undefined
        ),
});

export const contactSchema = z.object({
    email: z.string().email("Invalid email address"),
    mobile: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
});