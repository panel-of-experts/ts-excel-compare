import React from "react";
import "antd/dist/antd.css";
import { Button, Switch } from "antd";

interface DiffBtn {
  btntext: string;
  showReordered: boolean;
  onDiffBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onSampleBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onResetBtnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): any;
  onShowReorderedChange(checked: boolean): any;
}

const CenterHooks = (props: DiffBtn) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        type="dashed"
        size="small"
        style={{ marginTop: 150 }}
        onClick={(e) => props.onSampleBtnClick(e)}
      >
        {"< Sample >"}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-diff"
        type="primary"
        style={{ marginTop: 10 }}
        size="large"
        onClick={(e) => props.onDiffBtnClick(e)}
      >
        {props.btntext}
      </Button>
      <Button
        ref={React.createRef()}
        id="btn-clean"
        type="default"
        style={{ marginTop: 10 }}
        onClick={(e) => props.onResetBtnClick(e)}
      >
        {" << reset >> "}
      </Button>
      <div style={{ marginTop: 16, fontSize: 12 }}>
        <div>Reordered rows</div>
        <Switch
          checked={props.showReordered}
          onChange={props.onShowReorderedChange}
          size="small"
          style={{ marginTop: 4 }}
        />
      </div>
    </div>
  );
};

export default CenterHooks;
