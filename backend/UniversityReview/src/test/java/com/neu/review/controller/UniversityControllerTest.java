package com.neu.review.controller;

import com.neu.review.req.GetUniversityByIDReq;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class UniversityControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGet() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/university/getByID")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "    \"id\": 1\n" +
                        "}"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        System.out.println("Response content: " + content);
    }

    @Test
    public void testCreate() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/university/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "  \"name\": \"boston university\",\n" +
                        "  \"ranking\": \"QS100\",\n" +
                        "  \"studentSize\": 500,\n" +
                        "  \"description\": \"this is BU\",\n" +
                        "  \"photo\": \"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAW0lEQVR42mP8/wf/DpAAAlKAPla5cvAAAAAElFTkSuQmCC\"\n" +
                        "}"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        System.out.println("Response content: " + content);
    }
}
