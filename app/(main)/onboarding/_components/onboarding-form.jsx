"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { OnboardingSchema } from "@/app/lib/schema";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OnboardingForm = ({ industries }) => {
  const [selectedIndustry, setselectedIndustry] = useState(null);

  const router = useRouter();

  const {register, handleSubmit, formState:{errors}, setValue, watch,} = useForm({
    resolver: zodResolver(OnboardingSchema),
  })

  const onSubmit = async(values) => {};
  
  const watchIndustry = watch("industry");

  return <div className={"flex justify-center bg-background"}>
    <Card className={"w-full max-w-lg mt-10 mx-2"}>
      <CardHeader>
        <CardTitle className={"gradient-title text-4xl "}>Complete Your Profile</CardTitle>
        <CardDescription>Select your industry to get personalized career insights and recommendations.</CardDescription>
      </CardHeader>
      <CardContent className={"flex"}>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select onValueChange={(value)=>{
              setValue("industry", value);
              setselectedIndustry(
                industries.find((ind) => ind.id === value)
              );
              setValue("subIndustry", "");
            }}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select an Industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind)=> {
                  return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>
                })}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-red-500">{errors.industry.message}</p>
            )}
          </div>

          {watchIndustry && (
            <div className="space-y-2">
            <Label htmlFor="subIndustry">Specialization</Label>
            <Select onValueChange={(value)=>setValue("subIndustry", value)}>
              <SelectTrigger id="subIndustry">
                <SelectValue placeholder="Select an Industry" />
              </SelectTrigger>
              <SelectContent>
                {selectedIndustry?.subIndustries.map((ind)=> {
                  return <SelectItem value={ind} key={ind}>{ind}</SelectItem>
                })}
              </SelectContent>
            </Select>
            {errors.subIndustry && (
              <p className="text-sm text-red-500">{errors.subIndustry.message}</p>
            )}
          </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="experince">Years of Experince</Label>
            <Input id="experince" type="number" min="0" max="50" placeholder="Enter years of experince" {...register("experince")}></Input>
            {errors.experince && (
              <p className="text-sm text-red-500">{errors.experince.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Input id="skills" placeholder="e.g., Python, JavaScript, Project Management" {...register("skills")}></Input>
            <p className="text-sm text-muted-foreground">Seperate multiple skills with commas</p>

            {errors.skills && (
              <p className="text-sm text-red-500">{errors.skills.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio</Label>
            <Input id="bio" placeholder="Tell us about your professional background" {...register("bio")}></Input>
            <p className="text-sm text-muted-foreground">Seperate multiple skills with commas</p>

            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  </div>;
};

export default OnboardingForm;