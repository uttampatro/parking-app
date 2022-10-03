import React, { useEffect, useState } from "react";
import { getAllUserListInGarage, removeUser } from "../../services/userService";
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

function Home() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const fetchStudentList = async () => {
    try {
      const data = await getAllUserListInGarage();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removingUser = async (id) => {
    try {
      const data = await removeUser(id);
      if (data) {
        alert("Remove User successfully");
      }
      window.location = window.location;
      navigate("/home");
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

  const records = async () => {
    try {
      navigate(`/records`);
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
            <Button onClick={records} variant="contained">
              All Records
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => {
              return (
                <TableRow className={classes.row} key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.vehicleNumber}</TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => removingUser(user._id)}
                    >
                      Remove
                    </Button>
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

export default Home;
