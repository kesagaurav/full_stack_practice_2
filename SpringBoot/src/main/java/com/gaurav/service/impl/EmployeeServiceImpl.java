package com.gaurav.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gaurav.model.Employee;
import com.gaurav.repository.EmployeeRepository;
import com.gaurav.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeRepository repo;

	@Override
	public Employee createEmployee(Employee e) {
		// TODO Auto-generated method stub
		return repo.save(e);
	}

	@Override
	public void deleteEmployee(int id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
		
	}

	@Override
	public Employee updateEmployee(Employee e) {
		// TODO Auto-generated method stub
		Integer i=e.getEid();
		Employee e1=repo.getById(i);
		e1.setUserName(e.getUserName());
		e1.setAddress(e.getAddress());
		e1.setSalary(e.getSalary());
		e1.setEmail(e.getEmail());
		e1.setPhone(e.getPhone());
		e1.setDesc(e.getDesc());
		
		return repo.save(e1);
	}

	@Override
	public List<Employee> getAllEmployess() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Employee getEmployeeById(int id) {
		// TODO Auto-generated method stub
		return repo.getById(id);
	}

}
