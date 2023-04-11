import React, { useEffect, useState } from 'react';
import { CheckMark } from '../../../components/Icons/';
import './fv-img-02.styles.scss';

const labels = ["国税庁OBが対応", "圧倒的な交渉力", "豊富な信頼と実績"]

function FvImg02() {


    return (
      <div className="right-section">
      <div className="carded fv-image-2">
        <div className="carded_item carded_item_main">
          <img src="/images/kv_02_01.jpg" alt="" />
        </div>
        <div className="carded_item carded_item_sub">
          <img src="/images/kv_02_02.jpg" alt="" />
        </div>
        <div className="carded_labels">
          {labels.map((label) =>(
            <div className="carded_labels_item">
              <span className="label">
                <CheckMark />
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
          }
export default FvImg02;
