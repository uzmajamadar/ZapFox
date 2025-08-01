'use client'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { onFlowPublish } from '../_actions/workflow-connections'

type Props = {
  name: string
  description: string
  id: string
  publish: boolean
}

const Workflow = ({ description, id, name, publish }: Props) => {
  const handlePublishToggle = async () => {
    try {
      const response = await onFlowPublish(id, !publish)
      
      if (response) {
        toast.success(response)
      }
    } catch (error) {
      console.error('Publish toggle error:', error)
      toast.error('Failed to update workflow status')
    }
  }

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Notion"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Discord"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div className="">
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Label
          htmlFor={`workflow-publish-${id}`}
          className="text-muted-foreground"
        >
          {publish ? 'On' : 'Off'}
        </Label>
        <Switch
          id={`workflow-publish-${id}`}
          checked={publish}
          onCheckedChange={handlePublishToggle}
        />
      </div>
    </Card>
  )
}

export default Workflow