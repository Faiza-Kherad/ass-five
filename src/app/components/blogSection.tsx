import BlogPost from './blogPosts'


const Blogsection = () => {
    return (
        <div className="parentContainer flex justify-center w-[100%]  p-11 flex-wrap">
            <BlogPost name="The Tale of Lost Cities" description="Explore mystery of cities" link="/blog-one"/>
            <BlogPost name="Unraveling Echoes" description="Learning UI design" link="/blog-two"/>
            <BlogPost name="Shadows of Science" description="Strange scientific phenomena" link="/blog-three"/>
            <BlogPost name="Ahmed" description="Hello! from Ahmed's Blog" link="/ahmed"/>
            <BlogPost name="Ink-Stained Mysteries" description="Power of Stories Across Time" link="/blog-five"/>
            <BlogPost name="Between the Pixels" description="Creativity with functionality" link="/blog-six"/>
        </div>
    )
}

export default Blogsection