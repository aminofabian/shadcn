import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"




export default function Home() {
  return (
    <>
    
    <Dialog>
    <DialogTrigger>
    <Button>
    Click Here
    </Button>    
    </DialogTrigger>
    <DialogContent>
    <DialogHeader>
    <DialogTitle>Are you absolutely sure?</DialogTitle>
    <DialogDescription>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
    </DialogDescription>
    </DialogHeader>
    </DialogContent>
    </Dialog>
    
    
    </>
    
    )
  }
  