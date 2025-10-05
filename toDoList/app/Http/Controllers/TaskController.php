<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
public function index()
{
    $tasks = Task::all(); // get all tasks
    return view('todolist', compact('tasks'));
}


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'nullable|string',
            'status' => 'required|in:toDo,inProgress,finished'
        ]);

        $task = Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
        ]);

        return response()->json($task);
    }

    public function destroy($id)
{
    $task = Task::findOrFail($id);
    $task->delete();

    return response()->json(['message' => 'Task deleted successfully']);
}

public function update(Request $request, $id)
{
    $task = Task::findOrFail($id);

    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'status' => 'required|string',
    ]);

    $task->update([
        'title' => $request->title,
        'description' => $request->description,
        'status' => $request->status,
    ]);

    return response()->json(['message' => 'Task updated successfully']);
}


}



