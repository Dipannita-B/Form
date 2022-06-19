package com.dipa.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class controller {
	
	@GetMapping("/register")
	public String form(Model model) {
		Application form = new Application();
		model.addAttribute("student", form);
		return "form";
	}
	
	@PostMapping("/studentdata")
	public String submit_form(@ModelAttribute("student") Application student) {
		return "studentdata";
	}
}
