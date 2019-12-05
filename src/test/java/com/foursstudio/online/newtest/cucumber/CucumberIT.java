package com.foursstudio.online.newtest.cucumber;

import org.junit.runner.RunWith;

import com.foursstudio.online.newtest.AbstractCassandraTest;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = "pretty", features = "src/test/features")
public class CucumberIT extends AbstractCassandraTest {

}
