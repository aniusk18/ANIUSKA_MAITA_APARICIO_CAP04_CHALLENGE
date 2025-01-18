interface FeatureItemProps {
    icon: React.ReactNode
    text: string
  }
  
  export function FeatureItem({ icon, text }: FeatureItemProps) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-purple-600 w-6 h-6">
          {icon}
        </div>
        <span className="text-lg">{text}</span>
      </div>
    )
  }