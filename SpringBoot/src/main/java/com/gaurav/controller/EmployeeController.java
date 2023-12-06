package com.gaurav.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gaurav.model.Employee;
import com.gaurav.service.EmployeeService;
@RestController
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService service;

	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee e) {
		// TODO Auto-generated method stub
		return service.createEmployee(e);
	}

	@DeleteMapping("/employee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
		// TODO Auto-generated method stub
		service.deleteEmployee(id);
		return new ResponseEntity<String>("the id is deleted successfully " + id, HttpStatus.OK);
		
	}
	
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		// TODO Auto-generated method stub
		return new ResponseEntity<Employee>(service.getEmployeeById(id), HttpStatus.OK);
	}

	@PutMapping("/employee")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee e) {
		// TODO Auto-generated method stub
				service.updateEmployee(e);
		return new ResponseEntity<Employee>(e, HttpStatus.ACCEPTED);
	}

	@GetMapping("/employees")
	public List<Employee> getAllEmployess() {
		// TODO Auto-generated method stub
		return service.getAllEmployess();
	}

}
