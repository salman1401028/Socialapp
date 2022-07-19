import { Badge, ListGroup } from "react-bootstrap";
import { FaUserCircle, FaRegComment } from 'react-icons/fa';
import './Post.css'
const ActiveMemberList = ({ posts }) => {
  return (
    <>
      <ListGroup as="ol">
        {posts.map((post) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start member-list-item"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold"><FaUserCircle />{' '}{post.author}</div>
            </div>
            {Math.ceil(Math.random() * 2) %2 ?
              (<Badge bg="success" pill>
                Active
              </Badge>) :
              (<Badge bg="secondary" pill>
                Inactive
              </Badge>
              )}

          </ListGroup.Item>
        ))}


      </ListGroup>
    </>
  )
}
export default ActiveMemberList