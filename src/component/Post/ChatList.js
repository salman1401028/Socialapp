import { Badge, ListGroup } from "react-bootstrap";
import './Post.css';
import dummyChat from '../assets/dummyChat.json';
const ChatList = ({posts}) => {
    return (
        <>
            <ListGroup as="ol" numbered>
                {posts.map((post)=>(
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start chat-list-item"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{post.author}</div>
                        {dummyChat[Math.ceil(Math.random() * 6)]}
                    </div>
                    <Badge bg="primary" pill>
                        {Math.ceil(Math.random()*5)}
                    </Badge>
                </ListGroup.Item>
                ))}


            </ListGroup>
        </>
    )
}
export default ChatList;