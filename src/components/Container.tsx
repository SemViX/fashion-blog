import { ContainerProps } from "@/types/container"

const Container = ({children, className}:ContainerProps) => {
  return (
    <div className={`max-w-[1200px] w-full mx-auto ${className} p-2`}>
        {children}
    </div>
  )
}

export default Container