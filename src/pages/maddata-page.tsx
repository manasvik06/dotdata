import React from "react"
import { ArrowRight, BarChart3, Database, FileSpreadsheet, Calendar, Clock, MapPin, Utensils, Presentation, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MadDataPage() {
  /**
   * Put your video file here:
   * public/MadData'26.mp4
   *
   * Then this path will work:
   * "/MadData'26.mp4"
   */
  const promoVideoSrc = "/MadData'26.MP4"

  const scheduleDay1 = [
    { time: "9:00 AM", title: "Check-in Begins", location: "Sterling 1310", icon: <MapPin className="h-5 w-5" /> },
    { time: "10:00 AM", title: "Check-in Closes & Opening Ceremony Begins", location: "Sterling 1310", icon: <Presentation className="h-5 w-5" /> },
    { time: "10:00 AM - 11:00 AM", title: "Opening Ceremony, Sponsor Presentations, Rules", location: "", icon: <Award className="h-5 w-5" /> },
    { time: "11:00 AM", title: "Move to Morgridge - Hacking Starts!", location: "Morgridge Basement", icon: <BarChart3 className="h-5 w-5" /> },
    { time: "11:30 AM - 12:30 PM", title: "AmFam Presentation", location: "", icon: <Presentation className="h-5 w-5" /> },
    { time: "1:00 PM", title: "Lunch", location: "", icon: <Utensils className="h-5 w-5" /> },
    { time: "1:30 PM - 2:30 PM", title: "Qualcomm Workshop", location: "", icon: <Presentation className="h-5 w-5" /> },
    { time: "3:00 PM - 5:00 PM", title: "Booths (AmFam, Qualcomm, Data Science Institute)", location: "", icon: <MapPin className="h-5 w-5" /> },
    { time: "5:00 PM", title: "Dinner", location: "", icon: <Utensils className="h-5 w-5" /> },
  ]

  const scheduleDay2 = [
    { time: "9:00 AM", title: "Breakfast", location: "", icon: <Utensils className="h-5 w-5" /> },
    { time: "11:00 AM", title: "Hacking Ends / Submissions Due", location: "", icon: <Clock className="h-5 w-5" /> },
    { time: "11:30 AM", title: "Presentations and Judging", location: "", icon: <Presentation className="h-5 w-5" /> },
    { time: "2:30 PM", title: "Closing Ceremony", location: "", icon: <Award className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            MadData
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MadData is dotData's annual data science hackathon. This competition happens in February, is open to all
            students at UW-Madison, and is free to enter. MadData is a great way for students to find innovative
            solutions for modern problems using data and gain real-world experience with data science tools.
          </p>
        </header>

        {/* Video + Applications Banner */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg border bg-black">
              <video
                className="w-full h-auto"
                src={promoVideoSrc}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Applications are now open!
                </p>
              </div>
              
              <div className="p-8 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  Apply to participate in MadData'26 — no prior experience required.
                </p>

                <a
                  href="https://forms.gle/GiAfyfRLfnqZ3vDw7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2 text-lg px-8 py-6">
                    Apply now <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>

                <p className="mt-6 text-sm text-gray-500">
                  If the button doesn't work, visit: https://forms.gle/GiAfyfRLfnqZ3vDw7
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="mb-16 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Event Schedule
            </h2>
          </div>

          {/* Day 1 - February 21st */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-5">
              <div className="flex items-center justify-center gap-3 text-white">
                <Calendar className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Day 1 - February 21st</h3>
              </div>
            </div>
            
            <div>
              {scheduleDay1.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors ${
                    index !== scheduleDay1.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex-shrink-0 bg-purple-100 p-2.5 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.location && (
                          <p className="text-purple-600 text-sm mt-1">{item.location}</p>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base whitespace-nowrap">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Day 2 - February 22nd */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
              <div className="flex items-center justify-center gap-3 text-white">
                <Calendar className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Day 2 - February 22nd</h3>
              </div>
            </div>
            
            <div>
              {scheduleDay2.map((item, index) => (
                <div
                  key={index}
                  className={`p-5 flex items-start gap-4 hover:bg-gray-50 transition-colors ${
                    index !== scheduleDay2.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <div className="flex-shrink-0 bg-blue-100 p-2.5 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.location && (
                          <p className="text-blue-600 text-sm mt-1">{item.location}</p>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm md:text-base whitespace-nowrap">
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">MadData '25 Winners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>ClaimReady</CardTitle>
                <CardDescription />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Computer vision AI to help homeowners scan, value, and protect belongings from forest fire losses,
                  making the insurance claims process faster and less stressful.
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://devpost.com/software/claimready?_gl=1*i70yaq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Project Card 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>NodeTree</CardTitle>
                <CardDescription />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Boost your thought journey.</p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://devpost.com/software/nodetree?_gl=1*1246msf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Project Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <FileSpreadsheet className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>AI-Interviewer</CardTitle>
                <CardDescription />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A low-pressure interview practice tool designed to help candidates improve confidence and performance
                  through realistic AI-driven mock interviews.
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://devpost.com/software/ai-interviewer?_gl=1*796znj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="gap-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
