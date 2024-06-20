"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { edit, trash } from "@/app/utils/Icons";
import React, { useState } from "react";
import styled from "styled-components";
import formatDate from "@/app/utils/formatDate";
import Modal from "../Modals/modal";
import CreateContent from "../Modals/CreateContent";

interface Task {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  important: boolean;
}

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  const { theme, deleteTask, updateTask } = useGlobalState();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (task: Task) => {
    updateTask({ ...task, id });
    setIsEditing(false);
  };

  return (
    <TaskItemStyled theme={theme}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button
            className="completed"
            onClick={() => updateTask({ id, isCompleted: !isCompleted })}
          >
            Completed
          </button>
        ) : (
          <button
            className="incomplete"
            onClick={() => updateTask({ id, isCompleted: !isCompleted })}
          >
            Incomplete
          </button>
        )}
        <button className="edit" onClick={handleEditClick}>{edit}</button>
        <button className="delete" onClick={() => deleteTask(id)}>{trash}</button>
      </div>

      {isEditing && (
        <Modal content={
          <CreateContent
            task={{ title, description, date, completed: isCompleted, important: false }}
            onSubmit={handleEditSubmit}
          />
        } />
      )}
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date {
    margin-top: auto;
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    button {
      border: none;
      outline: none;
      cursor: pointer;

      i {
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
      }
    }

    .edit {
      margin-left: auto;
    }

    .completed,
    .incomplete {
      display: inline-block;
      padding: 0.4rem 1rem;
      background: ${(props) => props.theme.colorDanger};
      border-radius: 30px;
    }

    .completed {
      background: ${(props) => props.theme.colorGreenDark} !important;
    }
  }
`;

export default TaskItem;
