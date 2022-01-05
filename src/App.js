import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class App extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container">
                    <div className="heading">TO-DO</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Insert text"
                        />
                        <Button
                            style={{ height: "40px" }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Send 
                        </Button>
                    </form>
                    <div>
                        {tasks.map((task) => (
                            <Paper
                                key={task.Rfrnc}
                                className="flex task_container"
                            >
                                <div
                                    
                                >
                                    {task.Rfrnc}
                                </div>
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.text}
                                </div>
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.Plndrm ? 'Palindrome' : 'No Palindrome'}
                                </div>
                            </Paper>
                        ))}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default App;
