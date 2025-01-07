# Unhandled Async Errors in Express.js

This repository demonstrates a common, yet subtle, issue in Express.js applications: unhandled asynchronous errors silently crashing the server.  The problem arises when asynchronous operations within request handlers throw errors, and these errors are not properly caught and handled.

## The Problem

The `bug.js` file contains an Express.js application with a route that performs an asynchronous operation.  If the asynchronous operation fails, the error is logged to the console, but the Express.js server doesn't gracefully handle it, leading to a crash without any explicit error message.

## The Solution

The `bugSolution.js` file shows the corrected version.  The key is to always include comprehensive error handling within the asynchronous operation's promise chain or using `async/await` and a `try...catch` block. This ensures that errors are caught and the server doesn't crash.