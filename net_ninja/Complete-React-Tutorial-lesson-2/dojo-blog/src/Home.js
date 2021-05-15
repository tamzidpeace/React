import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const title = "All Blogs"

    const handleDelete = (id) => {
        const new_blogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(new_blogs)
    }

    //fetching data from json server
    useEffect(() => {
        fetch('http://localhost:3001/blogs')
            .then(res => {
                return res.json()
            }).then(data => {
            console.log(data)
            setBlogs(data)
        })
    }, [])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title={title} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home