import { Button } from '@/components/ui/button'
import { Check, FileDown, Mail } from 'lucide-react'
import { useState } from "react"


export function ContactButtons() {
  const [copied, setCopied] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText("nathan@leibel.dev")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadResume = () => {
    //window.open("/resume.pdf")
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2000)
  }

  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <Button onClick={downloadResume}>
        {downloaded ? (
          <>
            <Check className="w-4 h-4" />
          </>
        ) : (
          <>
            <FileDown className="w-4 h-4" />
            Resume
          </>
        )}
      </Button>
      <Button onClick={copyEmail}>
        {copied ? (
          <>
            <Check className="w-4 h-4" />
          </>
        ) : (
          <>
            <Mail className="w-4 h-4" />
            Email
          </>
        )}
      </Button>
    </div>
  )
}