export default function Simple() {
    return (
        <div className="flex items-center justify-center mt-16 px-10">
            
            <div className="relative w-1/2">
                <div className="absolute -left-40 top-10 w-[600px] h-[300px] bg-indigo-500 rounded-r-full"></div>

                <img
                    src="https://via.placeholder.com/500x300"
                    alt="bookmark"
                    className="relative z-10 rounded-lg shadow-lg"
                />
            </div>

           
            <div className="w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                    Bookmark in one click
                </h2>
                <p className="text-gray-500">
                    Organize your bookmarks however you like. Our simple drag-and-drop
                    interface gives you complete control over how you manage your
                    favourite sites.
                </p>
                <button className="bg-indigo-500 text-white px-6 py-2 rounded-md">
                    More Info
                </button>
            </div>
        </div>
    )
}