package com.gaurav.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@ToString
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) 
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int eid;
	private String userName;
	private double salary;
	private String desc;
	private String email;
	private String address;
	private Long phone;
}
