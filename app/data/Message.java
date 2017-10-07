package data;


public class Message {
public enum Sender{BOT,USER};
public String text;
public String time;
public Sender sender;
public FeedResponse feedResponse;
}
