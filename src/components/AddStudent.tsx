import { useState } from "react";
import { addStudent } from "../api";
import { Box, Button, Input, VStack, useToast } from "@chakra-ui/react";

const AddStudent = () => {
  const [student, setStudent] = useState({
    student_id: "",
    name: "",
    class: "",
    sex: "",
    dob: "",
    favorite_teacher: "",
    favorite_subject: "",
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addStudent(student);
      toast({ title: "Student added!", status: "success", duration: 3000 });
      setStudent({ student_id: "", name: "", class: "", sex: "", dob: "", favorite_teacher: "", favorite_subject: "" });
    } catch (error) {
      toast({ title: "Error adding student", status: "error", duration: 3000 });
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <Input placeholder="Student ID" name="student_id" onChange={handleChange} value={student.student_id} />
        <Input placeholder="Name" name="name" onChange={handleChange} value={student.name} />
        <Input placeholder="Class" name="class" onChange={handleChange} value={student.class} />
        <Input placeholder="Sex" name="sex" onChange={handleChange} value={student.sex} />
        <Input placeholder="DOB" name="dob" onChange={handleChange} value={student.dob} />
        <Input placeholder="Favorite Teacher" name="favorite_teacher" onChange={handleChange} value={student.favorite_teacher} />
        <Input placeholder="Favorite Subject" name="favorite_subject" onChange={handleChange} value={student.favorite_subject} />
        <Button colorScheme="blue" onClick={handleSubmit}>Add Student</Button>
      </VStack>
    </Box>
  );
};

export default AddStudent;
