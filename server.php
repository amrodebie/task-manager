
<?php
// Simple PHP script for handling backend logic
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $taskName = $_POST['task_name'] ?? '';
    $taskDate = $_POST['task_date'] ?? '';
    if ($taskName && $taskDate) {
        echo json_encode(['status' => 'success', 'message' => 'Task added successfully!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input!']);
    }
}
?>
