package com.gaurav.service;

import java.util.List;

import com.gaurav.model.Employee;

public interface EmployeeService {
	Employee createEmployee(Employee e);
	void deleteEmployee(int id);
	Employee updateEmployee(Employee e);
	List<Employee> getAllEmployess();
	Employee getEmployeeById(int id);
	
}
