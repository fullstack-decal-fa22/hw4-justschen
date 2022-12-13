import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, postState] = useState([]);

    const update = (update) => {
        const concat = [...posts]
        concat.push(update)
        postState(concat)
        console.log(concat)
    }

    return (
        <div>
            <Menu update={update}></Menu>

            {/* Below is where all of your Blocks should render! */}
          
            {posts.map((post) => (
                <Block color={post.color}/>
            ))}
        </div>
    );
}

export default Feed;