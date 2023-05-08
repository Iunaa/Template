import Counter from "../../molecules/Counter/Counter"

export default function AboutUs() {
  return <div className="">
    <Counter
      data={[
        {
          title: "42%",
          text: "Years of experience",
          // icon: design 
        },
        {
          title: "73+",
          text: "Agency members",
          // icon: development 
        },
        {
          title: "5.000",
          text: "Projects complete",
          // icon: marketing  
        }
      ]}
    />
  </div>
}