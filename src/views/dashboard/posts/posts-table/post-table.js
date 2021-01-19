import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getALlPostsRequest, deletePostRequest } from '../../../../services/post-service/post.service';
import Button from '../../../../components/button/button';
import { generateSinglePostRoute } from '../../../../utils/routes/routes';

import './post-table.scss';

const PostTable = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await getALlPostsRequest();
      console.log(data);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const viewPost = (id) => {
    history.push(generateSinglePostRoute(id));
  };

  const editPost = (id) => {
    history.push(generateSinglePostRoute(id));
  };

  const deletePost = async (id) => {
    try {
      await deletePostRequest(id).then(() => fetchPosts());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="posts-table">
      <div className="posts-table__title">
        <h1>Post table</h1>
      </div>
      <div className="posts-table__table">
        <table className="posts-table__table__content">
          <thead>
            <tr>
              <th>Title</th>
              <th> Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={2} style={{ textAlign: 'center' }}>There is no posts</td>
              </tr>
            )
              : posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.description}</td>

                  <td>
                    <Button title="View" onClick={() => viewPost(post.id)} />
                    <Button title="Edit" onClick={() => editPost(post.id)} />
                    <Button title="Delete" onClick={() => deletePost(post.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostTable;
