import React from "react"
import { ArrowRight, BarChart3, Database, FileSpreadsheet } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <header className="mb-10 text-center">
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

            <div className="mt-6 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-gray-900">
                Applications are now open.
              </p>
              <p className="mt-2 text-gray-600">
                Apply to participate in MadData’26 — no prior experience required.
              </p>

              <div className="mt-5 flex justify-center">
                <a
                  href="https://forms.gle/GiAfyfRLfnqZ3vDw7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="gap-2">
                    Apply now <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              <p className="mt-3 text-sm text-gray-500">
                If the button doesn’t work, visit: https://forms.gle/GiAfyfRLfnqZ3vDw7
              </p>
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">2025 MadData Winners</h2>

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
