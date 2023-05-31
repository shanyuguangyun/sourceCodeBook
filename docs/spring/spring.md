# Spring实战（第六版）摘要

相较于源码解析之类的数据，这类偏实战的书籍友好很多。

###　1.注入方式

以前的xml注入
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd">
    <bean id="simpleBean" class="com.europa.main.bean.SimpleBean"/>
</beans>
```

现在更多为java代码注入
@Configuration注解会告知Spring这是一个配置类，它会为Spring应用上下文提供bean。这个配置类的方法上使用@Bean注解进行了标注，这表明这些方法所返回的对象会以bean的形式添加到Spring的应用上下文中（默认情况下，这些bean所对应的bean ID与定义它们的方法名称是相同的）。
```java
@Configuration
public class ServiceConfiguration {
  @Bean
  public InventoryService inventoryService() {
    return new InventoryService();
  }

  @Bean
  public ProductService productService() {
    return new ProductService(inventoryService());
  }
}
```
