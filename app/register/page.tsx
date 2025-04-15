import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Registration</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our basketball academy and start your journey to becoming a better player. Fill out the form below
                to register for our programs.
              </p>
            </div>

            <Tabs defaultValue="new" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="new">New Player</TabsTrigger>
                  <TabsTrigger value="returning">Returning Player</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="new">
                <Card>
                  <CardHeader>
                    <CardTitle>New Player Registration</CardTitle>
                    <CardDescription>
                      Please fill out all required fields to complete your registration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Player Information</h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name *</Label>
                            <Input id="first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name *</Label>
                            <Input id="last-name" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth *</Label>
                            <Input id="dob" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender">Gender *</Label>
                            <Select>
                              <SelectTrigger id="gender">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="school">School</Label>
                          <Input id="school" />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="grade">Grade</Label>
                            <Select>
                              <SelectTrigger id="grade">
                                <SelectValue placeholder="Select grade" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                                  <SelectItem key={grade} value={grade.toString()}>
                                    Grade {grade}
                                  </SelectItem>
                                ))}
                                <SelectItem value="college">College</SelectItem>
                                <SelectItem value="adult">Adult</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="experience">Basketball Experience</Label>
                            <Select>
                              <SelectTrigger id="experience">
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                                <SelectItem value="intermediate">Intermediate (2-3 years)</SelectItem>
                                <SelectItem value="advanced">Advanced (4+ years)</SelectItem>
                                <SelectItem value="competitive">Competitive (School/Club Team)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Parent/Guardian Information</h3>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parent-first-name">First Name *</Label>
                            <Input id="parent-first-name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parent-last-name">Last Name *</Label>
                            <Input id="parent-last-name" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parent-email">Email *</Label>
                            <Input id="parent-email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="parent-phone">Phone *</Label>
                            <Input id="parent-phone" type="tel" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">Address *</Label>
                          <Input id="address" required />
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City *</Label>
                            <Input id="city" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State *</Label>
                            <Input id="state" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">Zip Code *</Label>
                            <Input id="zip" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="emergency-contact">Emergency Contact Name & Phone *</Label>
                          <Input id="emergency-contact" required />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Program Selection</h3>

                        <div className="space-y-2">
                          <Label>Select Program(s) *</Label>
                          <div className="grid sm:grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="youth-program" />
                              <Label htmlFor="youth-program">Youth Development (Ages 7-12)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="elite-program" />
                              <Label htmlFor="elite-program">Elite Training (Ages 13-18)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="private-coaching" />
                              <Label htmlFor="private-coaching">Private Coaching</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="summer-camp" />
                              <Label htmlFor="summer-camp">Summer Camp</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="team-training" />
                              <Label htmlFor="team-training">Team Training</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="adult-league" />
                              <Label htmlFor="adult-league">Adult League</Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred Training Days</Label>
                          <div className="grid sm:grid-cols-3 gap-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="monday" />
                              <Label htmlFor="monday">Monday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="tuesday" />
                              <Label htmlFor="tuesday">Tuesday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="wednesday" />
                              <Label htmlFor="wednesday">Wednesday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="thursday" />
                              <Label htmlFor="thursday">Thursday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="friday" />
                              <Label htmlFor="friday">Friday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="saturday" />
                              <Label htmlFor="saturday">Saturday</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="sunday" />
                              <Label htmlFor="sunday">Sunday</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Medical Information</h3>

                        <div className="space-y-2">
                          <Label htmlFor="medical-conditions">Medical Conditions or Allergies</Label>
                          <Textarea
                            id="medical-conditions"
                            placeholder="Please list any medical conditions, allergies, or medications we should be aware of."
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Does the player have medical insurance? *</Label>
                          <RadioGroup defaultValue="yes">
                            <div className="flex space-x-4">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="insurance-yes" />
                                <Label htmlFor="insurance-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="insurance-no" />
                                <Label htmlFor="insurance-no">No</Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Agreements</h3>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="liability-waiver" className="mt-1" />
                          <Label htmlFor="liability-waiver" className="text-sm">
                            I agree to the liability waiver and release form. I understand that basketball involves
                            certain inherent risks and I assume all risks associated with my child's participation. *
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="photo-release" className="mt-1" />
                          <Label htmlFor="photo-release" className="text-sm">
                            I grant permission for photographs and videos of my child to be taken during academy
                            activities and to be used for promotional purposes. *
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms-conditions" className="mt-1" />
                          <Label htmlFor="terms-conditions" className="text-sm">
                            I have read and agree to the academy's terms and conditions, including payment policies and
                            program requirements. *
                          </Label>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit Registration</Button>
                    <p className="text-xs text-gray-500 text-center">
                      * Indicates required fields. Registration is subject to availability and confirmation.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="returning">
                <Card>
                  <CardHeader>
                    <CardTitle>Returning Player Registration</CardTitle>
                    <CardDescription>
                      Welcome back! Please enter your email to access your account and register for new programs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="returning-email">Email Address *</Label>
                        <Input id="returning-email" type="email" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="returning-password">Password *</Label>
                        <Input id="returning-password" type="password" required />
                      </div>

                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Sign In</Button>

                      <div className="text-center">
                        <a href="#" className="text-sm text-orange-500 hover:underline">
                          Forgot your password?
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
