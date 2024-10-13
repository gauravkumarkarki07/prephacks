import FeedInfo from "../components/FeedInfo"
import PostCard from "../components/PostCard"
import RightSideColumn from "../components/RightSideColumn"

function Home() {
  return (
    <section className="flex flex-row gap-4">
      <section className="flex flex-col gap-4 w-full">
        <FeedInfo />
        <hr className="border-gray-300" />
        <PostCard />
        <hr className="border-gray-300" />
      </section>
      <RightSideColumn />
    </section>
  )
}

export default Home