# Bug Report: Note Appears in Wrong Category

**Bug ID:** BUG-001  
**Date Reported:** 2025-08-06  
**Reported By:** Saurav Guragain 

---

## Description
A note created in the "Home" category is incorrectly displayed in the "Work" category section.

---

## Module / Area
Notes Display / Category Filtering

---

## Test Case Reference
TC007 - Check if note appears in wrong category

---

## Environment
- URL: https://practice.expandtesting.com/notes/app  
- Browser: Brave Browser 
- OS: Windows 11  

---

## Precondition
User is logged in and able to create notes.

---

## Steps to Reproduce
1. Login to the Notes app.  
2. Click on Home category
2. Click "+ Add Note".  
3. Enter Title: **Testing if this shows in work**.  
4. Select Category: **Home**.  
5. Click "Save".  
6. Navigate to the **Work** category section.

---

## Expected Result
The note should appear only in the "Home" category section but its showing in work too.

---

## Actual Result
The note also appears in the "work" category section.

---

## Severity
Major

---

## Priority
High

---

## Status
Open

---

## Suggested Fix
Review and fix the category filtering logic so that notes are displayed only in their assigned category.


