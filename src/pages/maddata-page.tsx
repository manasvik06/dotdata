import React from "react"
import { ArrowRight, BarChart3, Database, FileSpreadsheet, Users, Trophy, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MadDataPage() {
  const promoVideoSrc = "/MadData'26.MP4"
  const qualcommLogoSrc = "/qualcomm.png"
  const qualcommLaptopSpecPdf = "/Qualcomm_Laptop_Specs.pdf"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            MadData'26
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            dotData's annual data science hackathon — open to all UW-Madison students, free to enter.
          </p>
        </header>

        {/* Success Banner */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-10 md:p-14 text-white text-center shadow-xl">
            <p className="text-sm uppercase tracking-widest opacity-75 mb-3">February 2026</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">It was a huge success.</h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">
              Thank you to every hacker, mentor, sponsor, and organizer who made the weekend unforgettable.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <div className="flex justify-center mb-2">
                  <Users className="h-6 w-6 opacity-70" />
                </div>
                <p className="text-4xl md:text-5xl font-bold">300+</p>
                <p className="text-white/65 mt-1 text-sm">Participants</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Trophy className="h-6 w-6 opacity-70" />
                </div>
                <p className="text-4xl md:text-5xl font-bold">70+</p>
                <p className="text-white/65 mt-1 text-sm">Projects Submitted</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Zap className="h-6 w-6 opacity-70" />
                </div>
                <p className="text-4xl md:text-5xl font-bold">24</p>
                <p className="text-white/65 mt-1 text-sm">Hours of Hacking</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maddata26-28800.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                  View Projects on Devpost <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1z0t-FzDlVl_eJTJH1RLk4pS9x5hS9Iss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-white text-white bg-transparent hover:bg-white/10 hover:text-white w-full sm:w-auto"
                >
                  See the Photos <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border bg-black">
            <video
              className="w-full h-auto"
              src={promoVideoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </section>

        {/* Qualcomm Track / Sponsors Section */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side: Title + Logo */}
              <div className="p-10 bg-gradient-to-br from-purple-600 to-blue-600 text-white flex flex-col justify-center">
                <p className="text-sm uppercase tracking-wider opacity-90 mb-3">
                  Sponsor Track
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Qualcomm Track
                </h2>
                <p className="text-white/90 text-base md:text-lg max-w-md">
                  Build with on-device AI and run models locally during the hackathon.
                </p>

                <div className="mt-10 flex justify-start">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                    <img
                      src={qualcommLogoSrc}
                      alt="Qualcomm logo"
                      className="h-20 md:h-28 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Details */}
              <div className="p-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Qualcomm Track
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span>
                      MadData introduced a new Qualcomm Track, designed for teams
                      interested in building with on-device AI
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span>
                      Selected teams worked with Qualcomm-powered laptops, building and running
                      models locally without relying on the cloud
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span>
                      Teams had the opportunity to interact with and learn directly from Qualcomm engineers
                      throughout the hackathon
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span>
                      Teams consisted of exactly three members — spots in this track were limited
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-600 flex-shrink-0" />
                    <span>
                      Prizes for this track included laptops
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t bg-gray-50 p-6 text-center">
              <a
                href={qualcommLaptopSpecPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  View Qualcomm Laptop Specs (PDF) <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Winners Section */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">MadData '25 Winners</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
