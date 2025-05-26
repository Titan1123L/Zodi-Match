"use client"

import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Heart, Users, MessageCircle, Zap, Briefcase } from "lucide-react"
import Link from "next/link"
import { zodiacSigns, getCompatibility } from "@/lib/zodiac-data"
import { CircularProgress } from "@/components/circular-progress"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const sign1 = searchParams.get("sign1") || ""
  const sign2 = searchParams.get("sign2") || ""
  const name1 = searchParams.get("name1") || "Person 1"
  const name2 = searchParams.get("name2") || "Person 2"

  const zodiac1 = zodiacSigns.find((z) => z.id === sign1)
  const zodiac2 = zodiacSigns.find((z) => z.id === sign2)
  const compatibility = getCompatibility(sign1, sign2)

  if (!zodiac1 || !zodiac2 || !compatibility) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Card className="bg-white/10 backdrop-blur-sm border-purple-300/20">
          <CardContent className="p-8 text-center">
            <p className="text-white text-xl">Invalid compatibility data</p>
            <Link href="/compatibility">
              <Button className="mt-4">Try Again</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const categories = [
    { name: "Love", icon: Heart, score: compatibility.love, color: "text-red-400" },
    { name: "Friendship", icon: Users, score: compatibility.friendship, color: "text-blue-400" },
    { name: "Communication", icon: MessageCircle, score: compatibility.communication, color: "text-green-400" },
    { name: "Emotional", icon: Zap, score: compatibility.emotional, color: "text-yellow-400" },
    { name: "Professional", icon: Briefcase, score: compatibility.professional, color: "text-purple-400" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/compatibility">
            <Button variant="ghost" className="text-purple-200 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              New Match
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header with signs */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-300/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="text-6xl mb-2">{zodiac1.symbol}</div>
                  <h2 className="text-2xl font-bold text-white">{zodiac1.name}</h2>
                  <p className="text-purple-200">{name1}</p>
                  <p className="text-sm text-purple-300 mt-1">
                    {zodiac1.element} • {zodiac1.dates}
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl text-pink-300 mb-4">💫</div>
                  <div className="text-center">
                    <CircularProgress value={compatibility.overall} size={120} />
                    <p className="text-white font-semibold mt-2">Overall Match</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-6xl mb-2">{zodiac2.symbol}</div>
                  <h2 className="text-2xl font-bold text-white">{zodiac2.name}</h2>
                  <p className="text-purple-200">{name2}</p>
                  <p className="text-sm text-purple-300 mt-1">
                    {zodiac2.element} • {zodiac2.dates}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compatibility Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="bg-white/10 backdrop-blur-sm border-purple-300/20">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    <span>{category.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200">Score</span>
                      <span className="text-white font-bold">{category.score}%</span>
                    </div>
                    <Progress value={category.score} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Description */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-300/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Astrological Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-2">Compatibility Overview</h3>
                <p className="text-white leading-relaxed">{compatibility.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-purple-200 font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {compatibility.strengths.map((strength, index) => (
                      <li key={index} className="text-white flex items-start">
                        <span className="text-green-400 mr-2">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-purple-200 font-semibold mb-2">Challenges</h4>
                  <ul className="space-y-1">
                    {compatibility.challenges.map((challenge, index) => (
                      <li key={index} className="text-white flex items-start">
                        <span className="text-yellow-400 mr-2">⚠</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compatibility">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
                Try Another Match
              </Button>
            </Link>
            <Link href="/horoscope">
              <Button
                variant="outline"
                className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-3 rounded-full"
              >
                Daily Horoscope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
