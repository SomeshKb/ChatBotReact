import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  makeStyles,
  CardContent,
  InputBase,
  IconButton,
  Avatar,
  colors,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import botImage from "./bot.png";
import LoadingDots from "./LoadingDots";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    minHeight: 520,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: theme.palette.primary.main,
    color: colors.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 56,
    padding: "0px 10px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  message: {
    padding: 10,
    background: theme.palette.secondary.main,
    maxWidth: 300,
    wordBreak: "break-all",
    color: colors.common.white,
    margin: "0px 5px",
  },
  messageUser: {
    borderRadius: "18px 18px 0px",
  },
  messageBot: {
    borderRadius: "18px 18px 18px 0px",
    background: "#8a8a8a", // TODO using theme
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: 4,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    overflow: "auto",
    height: 200,
  },
  messageContainer: {
    display: "flex",
    margin: 10,
    alignItems: "flex-end",
  },
  sendMessage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 5px",
    background: colors.common.white,
  },
  cardContent: {
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 0,
    flexDirection: "column",
    background: "rgb(245, 248, 251)",
  },
  avatarContainer: {
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
    height: 40,
    minWidth: 40,
    transformOrigin: "right bottom",
    animation: "0.3s ease 0s 1 normal forwards running Lmuha",
    padding: 3,
  },
  avatarUser: {
    borderRadius: "50% 50% 50% 0px",
  },
  avatarBot: {
    borderRadius: "50% 50% 0px",
  },
  messageContainerUser: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
}));

const Content = ({ messageList, contentRef, loading }) => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer} ref={contentRef}>
      {messageList.map(({ message, type }, i) => {
        const isUser = type === "user";
        const messageContainerClassName = isUser
          ? classes.messageContainerUser
          : "";
        const messageClassName = `${classes.message}${
          isUser ? ` ${classes.messageUser}` : ` ${classes.messageBot}`
        }`;
        return (
          <div className={messageContainerClassName} key={i}>
            <div className={classes.messageContainer}>
              {!isUser && (
                <div
                  className={`${classes.avatarContainer} ${classes.avatarBot}`}
                >
                  <Avatar className={classes.avatar} src={botImage} />
                </div>
              )}
              <div className={messageClassName}>{message}</div>
              {isUser && (
                <div
                  className={`${classes.avatarContainer} ${classes.avatarUser}`}
                >
                  <Avatar className={classes.avatar} />
                </div>
              )}
            </div>
            {i === messageList.length - 1 && loading && <LoadingDots />}
          </div>
        );
      })}
    </div>
  );
};

export default function PopperContent({ getResponse }) {
  const classes = useStyles();
  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const [messageList, setMessageList] = useState([]);

  const ref = useRef();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const sendMessage = async (e) => {
    const newMessageList = [...messageList, { type: "user", message: text }];
    setMessageList(newMessageList);
    setTimeout(() => (ref.current.scrollTop = ref.current.scrollHeight));
    setText("");
    if (getResponse) {
      setLoading(true);
      const res = await getResponse(text);
      setLoading(false);
      setMessageList([
        ...newMessageList,
        { type: "bot", message: res.Message },
      ]);
      setTimeout(() => (ref.current.scrollTop = ref.current.scrollHeight));
    }
  };

  function keyPress(e) {
    if (e.keyCode === 13) {
      sendMessage(e);
    }
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Test"
        className={classes.header}
        titleTypographyProps={{ variant: "p" }}
      />
      <CardContent className={classes.cardContent}>
        <Content messageList={messageList} contentRef={ref} loading={loading} />
        <div className={classes.sendMessage}>
          <InputBase
            value={text}
            onChange={handleChange}
            className={classes.input}
            placeholder="Type a message"
            inputProps={{ "aria-label": "search google maps" }}
            onKeyDown={keyPress}
          />
          <IconButton onClick={sendMessage}>
            <SendIcon color={colors.grey[200]} />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
