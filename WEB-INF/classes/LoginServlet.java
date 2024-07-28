import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
public class LoginServlet extends HttpServlet
{
  Connection con;
  public void init()
  {
    try
    {
       Class.forName("oracle.jdbc.driver.OracleDriver");
       con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","scott","tiger");
    }
    catch(Exception e)
    {
        System.out.println(e);
    }
  }
  public void service(HttpServletRequest hreq,HttpServletResponse hres)
  {
    try
    {
      String s1=hreq.getParameter("mail");
      String s2=hreq.getParameter("pwd");
      PreparedStatement pstmt=con.prepareStatement("select * from amazon where user_emailid=? and user_password=?");
      pstmt.setString(1,s1);
      pstmt.setString(2,s2);
      pstmt.executeQuery();

      DateTimeFormatter dtf=DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
      LocalDateTime now=LocalDateTime.now();
      PreparedStatement ps=con.prepareStatement("Insert into amazonregister values(?,?,?)");
      ps.setString(1,s1);
      ps.setString(2,s2);
      ps.setString(3,dtf.format(now));
      ps.executeUpdate();

      PrintWriter pw=hres.getWriter();
      pw.println("<html><body bgcolor=yellow text=red><center><h1><B>");
      pw.println("<i>Welcome to Amazon Web Page</i></B></h1>");
      pw.println("<a href=index.html>Go To HomePage</a>");
      pw.println("</center></body></html>");
    }
    catch(Exception e)
    {
      System.out.println(e);
    }
  }
}