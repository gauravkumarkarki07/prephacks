import FeedInfo from "../components/FeedInfo"
import PostCard from "../components/PostCard"

function Home() {
  return (
    <section className="flex flex-col gap-4">
      <FeedInfo/>
      <hr/>
      <PostCard/>
      <hr/>
    </section>
  )
}

export default Home