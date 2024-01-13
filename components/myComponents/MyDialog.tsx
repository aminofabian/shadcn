import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

function MyDialog() {
  return (
    <div>
    <Dialog>
    <DialogTrigger>
    Open
    </DialogTrigger>
    <DialogContent>
    Only My Content
    </DialogContent>
    </Dialog>
    
    
    </div>
    )
  }
  
  export default MyDialog
  