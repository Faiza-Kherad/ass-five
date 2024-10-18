import Link from "next/link"

const BlogPost = (props: any) => {
    return (
        <div className="childContainer p-4 bounce-in-right sm:jello-horizontal w-[100%] sm:w-[250px] h-[300px]  bg-purple-200 rounded-xl hover:shadow-purple-700 shadow-md m-3">
            <div className="imageContainer mb-3 bg-purple-400 w-full h-1/2 rounded-lg">
            </div>
            <h2 className='mb-3  text-lg font-semibold'>{props.name}</h2>
            <p className=''>{props.description}</p>
                <Link href={props.link}>
                <button className=' mt-3 rounded-full bg-transparent text-purple-700 p-2 border border-purple-700'>
                    Read More
                </button>
                </Link>
        </div>
    )
}

export default BlogPost