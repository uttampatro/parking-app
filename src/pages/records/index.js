import React, { useEffect, useState } from "react";
import {
  getAllUserList,
  getAllUserListInGarage,
} from "../../services/userService";
import {
  TableHead,
  TableRow,
  TableBody,
  Table,
  Button,
  TableCell,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./style.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  homeBody: {
    padding: "30px",
    width: "75%",
  },
  table: {
    width: "100%",
    paddingLeft: "50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "lightgray",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

function Records() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const fetchStudentList = async () => {
    try {
      const data = await getAllUserList();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToHome = async () => {
    try {
      navigate(`/home`);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      navigate(`/addUser`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudentList();
  }, []);

  return (
    <div>
      <div className="header">
        <h3 style={{ cursor: "pointer" }} onClick={goToHome}>
          Parking App
        </h3>
        <div className="headerButton">
          <div className="button1">
            <Button onClick={goToHome} variant="contained">
              Home
            </Button>
          </div>
          <div className="button2">
            <Button onClick={addUser} variant="contained">
              Add User
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.homeBody}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>Driver Name</TableCell>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Check In</TableCell>
              <TableCell>Check Out</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow className={classes.row} key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.vehicleNumber}</TableCell>
                  <TableCell>
                    {moment(user.createdAt).format("D/M/YYYY - hh:mm a")}
                  </TableCell>
                  <TableCell>
                    {!user.state ? (
                      moment(user.updatedAt).format("D/M/YYYY - hh:mm a")
                    ) : (
                      <>NA</>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Records;
