import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;

public class RegisterServlet extends HttpServlet
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
      DateTimeFormatter dtf=DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
      LocalDateTime now=LocalDateTime.now();
      String s1=hreq.getParameter("namee");
      String s2=hreq.getParameter("no");
      String s3=hreq.getParameter("mail");
      String s4=hreq.getParameter("pwd");
      PreparedStatement pstmt=con.prepareStatement("insert into amazon values(?,?,?,?,?)");
      pstmt.setString(1,s1);
      pstmt.setString(2,s2);
      pstmt.setString(3,s3);
      pstmt.setString(4,s4);
      pstmt.setString(5,dtf.format(now));
      pstmt.executeUpdate();
      PrintWriter pw=hres.getWriter();
      System.out.println("date:"+dtf.format(now));
      pw.println("<html><body bgcolor=yellow text=red><center>");
      pw.println("<i><h1>&#128512;&#128516;&#128151;Welcome To Sanket Amazon Website &#128151;&#128512;&#128516;</h1></i>");
      pw.println("<h2><B>Your Account has been Created Succesfully at Below Time</B></h2><br>");
      pw.println("<h1><b><u>Time: "+dtf.format(now)+"</u></b></h1>");
      pw.println("</center></body></html>");
    }
    catch(Exception e)
    {
      System.out.println(e);
    }
  }
}