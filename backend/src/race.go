package main

import "strings"

type Task struct {
	passage  []string
	position int
	id       int
}

var incr int = 1

func GetTask(passage string) *Task {
	incr = incr + 1
	task := new(Task)
	task.setValues(passage)
	return task
}

func (task *Task) setValues(passage string) {
	task.id = incr
	incr = incr + 1
	task.position = 0
	task.passage = strings.Split(passage, " ")
}

func RandomString() string {
	return "This is the text I need you to type."
}
