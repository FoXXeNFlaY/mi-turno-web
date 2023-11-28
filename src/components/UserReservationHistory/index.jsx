import React, { useEffect, useState } from "react";
import { TableList } from "../../commons/TableList";
import { useSelector } from "react-redux";
import axios from "axios";
import s from "./style.module.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const UserReservationHistory = () => {
  let user;
  user = useSelector((state) => state.user);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/appointmentList/${user.dni}`)
      .then((res) => {
        setReservations(
          res.data.map((obj) => {
            const { branch, reservationId, date } = obj;
            const name = branch.name;
            const telephone = branch.telephone;
            return { reservationId, name, date, telephone };
          })
        );
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [user]);
  if (loading) return <>Loading...</>;
  else if (reservations.length == 0)
    return (
      <div className={s.mid}>
        <h1>No hay reservas</h1>
        <Button
          onClick={(e) => {
            navigate(`/`);
          }}
          variant="contained"
          style={{
            backgroundColor: "#F5F5F5",
            color: "#A442F1",
            textTransform: "none",
            padding: "0 !important",
          }}
        >
          Crear Reserva
        </Button>
      </div>
    );
  else
    return (
      <>
        <TableList data={reservations} datatype="Reservas" />
      </>
    );
};
export default UserReservationHistory;
