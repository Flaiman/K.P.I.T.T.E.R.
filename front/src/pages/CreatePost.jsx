import React, {useState} from "react";
import {createPost} from "../api.jsx";
import Ideas from "../components/Ideas.jsx";

const CreatePost = ({username}) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(username, {content});
            setContent("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-center text-3xl lg:text-5xl text-amber-600 mb-4">
                Notice anything unusual?
            </p>

                <div className="mt-6 flex justify-center">
                    <img
                        src="https://media.giphy.com/media/HuQKGxnVIngQ2kG5Pv/giphy.gif?cid=790b761155lapsqzn41axuz7amyzrnly9f69zus4co47f3re&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="Animated GIF"
                        className="w-48 h-auto"
                    />
                </div>
                <textarea
                    className="rounded-lg border-2 border-white w-full h-24 p-4 text-lg placeholder-gray-500  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How's the Z.O.N.E. these days?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button
                    className="flex items-center gap-2 bg-main text-white px-8 py-3 rounded-full mx-auto md:mx-0 hover:scale-105 transition-all duration-300 focus:outline-none"
                    type="submit"
                >
                    Post
                </button>
            </form>
            <Ideas/>
        </div>
    );
};

export default CreatePost;
