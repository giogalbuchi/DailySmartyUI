import { 
    SET_RECENT_POSTS ,
    SET_RESULTS_POSTS
} from './types';

import axios from 'axios';


export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.dailysmarty.com/posts').then(response => {
            console.log("response from post", response.data.posts);
            dispatch ({
                type: SET_RECENT_POSTS,
                payload: response.data.posts
            })
        }).catch(error => {
            console.log("error with posts", error);
        });
    }
}

export function fetchPosts(query, callback) {
    return function(dispatch) {
        axios.get(`https://api.dailysmarty.com/search?q=${query}`).then(response => {
            console.log("response from post", response.data.posts);
            dispatch ({
                type: SET_RESULTS_POSTS,
                payload: response.data.posts
            })
            if (callback) { callback() }
        }).catch(error => {
            console.log("error with posts", error);
        });
    }
}