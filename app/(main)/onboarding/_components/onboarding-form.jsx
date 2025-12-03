"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";

const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setselectedIndustry] = useState(null);

  const router = useRouter();

  const {register, handleSubmit, formState:{errors}, setValue, watch,} = useForm({
    resolver: zodResolver(OnboardingSchema),
  })

  return <div>OnboardingForm</div>;
};

export default OnboardingForm;