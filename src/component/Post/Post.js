import axios from 'axios'
import { useEffect, useState } from 'react';

import { Row, Col, Card, Spinner, Button, Badge, Container, ListGroup } from "react-bootstrap";
import './Post.css'
import { FaUserCircle, FaRegComment } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import dummyTime from '../assets/dummyTime.json';
import dummyText from '../assets/dummyText.json';
import ActiveMemberList from './ActiveMemberList';
import ChatList from './ChatList';
const Post = () => {


  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list")
        let resPosts = [...res.data]
        let postsWithAdditionalDetails = resPosts.map(post => {
          let likeCount = Math.ceil(Math.random() * 1000)
          let commentCount = Math.ceil(Math.random() * 10)
          let time = dummyTime[Math.ceil(Math.random() * 8)]
          let text = dummyText[Math.ceil(Math.random() * 3)]
          let isLikedByCurrentUser = false;

          return {  //RETURNING ALL ABOVE ADDITIONAL DETAILS WITH API CALLS WITH HELP OF SPREAD OPERATOR
            ...post,
            likeCount,
            commentCount,
            time,
            text
          }
        })
        setPosts(postsWithAdditionalDetails); //State can be updated in response to event handlers, server responses, or prop changes.
      }
      catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);



  const incrementCommentCount = (postId) => {
    let updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.commentCount = post.commentCount + 1;
      }
      return post;
    });

    setPosts(updatedPosts);
  };




  const toggleLikeCount = (postId) => {
    let updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        if (post.isLikedByCurrentUser) {
          post.likeCount = post.likeCount - 1;
          post.isLikedByCurrentUser = false;
        } else {
          post.likeCount = post.likeCount + 1;
          post.isLikedByCurrentUser = true;
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  }



  let randomChatList = posts.filter((post) => (post.id) % 2 === 0)



  return (

    <Container>
      <Row>
        <Col>
          <ActiveMemberList posts={posts} /> {/*We are passing the state of this component as props to ActiveMemberList */}
        </Col>

        <Col md={4} className='colstyle'>
          <Row>
            {posts.length ? (
              posts.map((post) => (
                <Col key={post.id} md={12} className="single-photo">
                  <Card>
                    <Card.Header className="post-header">
                      <div>
                        <FaUserCircle /> {post.author}
                      </div>
                      <p className="post-time">{post.time}</p>
                    </Card.Header>
                    <Card.Img
                      variant="top"
                      src={post.download_url}
                      className="photo-img"
                    />
                    <Card.Body>
                      <p className="lead">{post.text}</p> 
                      <div className="action-btn-outer">
                        <Button
                          variant="light"
                          onClick={() => toggleLikeCount(post.id)}
                        >
                          {post.isLikedByCurrentUser ? (
                            <AiFillLike />
                          ) : (
                            <AiOutlineLike />
                          )}{" "}
                          <Badge pill bg="dark">
                            {post.likeCount}
                          </Badge>
                        </Button>
                        <Button
                          variant="light"
                          onClick={() => incrementCommentCount(post.id)}
                        >
                          <FaRegComment />{" "}
                          <Badge pill bg="dark">
                            {post.commentCount}
                          </Badge>
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="spinner-wrapper">
                <Spinner animation="border" role="status"></Spinner>
              </div>
            )}
          </Row>
        </Col>

        <Col>
          <ChatList posts={randomChatList} />
        </Col>
      </Row>
    </Container>

  );
};

export default Post;