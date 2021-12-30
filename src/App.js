import React from 'react';
import { Chart } from '@antv/g2';
import './style.css';

export default function App() {
  const chartRef = React.useRef();
  const init = React.useRef(false);
  const [options, setOptions] = React.useState({
    data: [
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640853046769,
        tooltipTitle: '2021-12-30 16:30:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.09,
        time: 1640853106769,
        tooltipTitle: '2021-12-30 16:31:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.19,
        time: 1640853166769,
        tooltipTitle: '2021-12-30 16:32:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.15,
        time: 1640853226769,
        tooltipTitle: '2021-12-30 16:33:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.17,
        time: 1640853286769,
        tooltipTitle: '2021-12-30 16:34:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640853346769,
        tooltipTitle: '2021-12-30 16:35:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.09,
        time: 1640853406769,
        tooltipTitle: '2021-12-30 16:36:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.03,
        time: 1640853466769,
        tooltipTitle: '2021-12-30 16:37:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.12,
        time: 1640853526769,
        tooltipTitle: '2021-12-30 16:38:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.25,
        time: 1640853586769,
        tooltipTitle: '2021-12-30 16:39:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.19,
        time: 1640853646769,
        tooltipTitle: '2021-12-30 16:40:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.12,
        time: 1640853706769,
        tooltipTitle: '2021-12-30 16:41:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.09,
        time: 1640853766769,
        tooltipTitle: '2021-12-30 16:42:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.24,
        time: 1640853826769,
        tooltipTitle: '2021-12-30 16:43:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.22,
        time: 1640853886769,
        tooltipTitle: '2021-12-30 16:44:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.08,
        time: 1640853946769,
        tooltipTitle: '2021-12-30 16:45:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640854006769,
        tooltipTitle: '2021-12-30 16:46:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.09,
        time: 1640854066769,
        tooltipTitle: '2021-12-30 16:47:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.18,
        time: 1640854126769,
        tooltipTitle: '2021-12-30 16:48:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.06,
        time: 1640854186769,
        tooltipTitle: '2021-12-30 16:49:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.02,
        time: 1640854246769,
        tooltipTitle: '2021-12-30 16:50:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.2,
        time: 1640854306769,
        tooltipTitle: '2021-12-30 16:51:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.12,
        time: 1640854366769,
        tooltipTitle: '2021-12-30 16:52:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.05,
        time: 1640854426769,
        tooltipTitle: '2021-12-30 16:53:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640854486769,
        tooltipTitle: '2021-12-30 16:54:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.04,
        time: 1640854546769,
        tooltipTitle: '2021-12-30 16:55:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.34,
        time: 1640854606769,
        tooltipTitle: '2021-12-30 16:56:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.2,
        time: 1640854666769,
        tooltipTitle: '2021-12-30 16:57:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.16,
        time: 1640854726769,
        tooltipTitle: '2021-12-30 16:58:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.06,
        time: 1640854786769,
        tooltipTitle: '2021-12-30 16:59:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.31,
        time: 1640854846769,
        tooltipTitle: '2021-12-30 17:00:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640854906769,
        tooltipTitle: '2021-12-30 17:01:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.04,
        time: 1640854966769,
        tooltipTitle: '2021-12-30 17:02:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.12,
        time: 1640855026769,
        tooltipTitle: '2021-12-30 17:03:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.04,
        time: 1640855086769,
        tooltipTitle: '2021-12-30 17:04:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.13,
        time: 1640855146769,
        tooltipTitle: '2021-12-30 17:05:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.15,
        time: 1640855206769,
        tooltipTitle: '2021-12-30 17:06:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.21,
        time: 1640855266769,
        tooltipTitle: '2021-12-30 17:07:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.16,
        time: 1640855326769,
        tooltipTitle: '2021-12-30 17:08:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.16,
        time: 1640855386769,
        tooltipTitle: '2021-12-30 17:09:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.31,
        time: 1640855446769,
        tooltipTitle: '2021-12-30 17:10:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.16,
        time: 1640855506769,
        tooltipTitle: '2021-12-30 17:11:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.15,
        time: 1640855566769,
        tooltipTitle: '2021-12-30 17:12:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.17,
        time: 1640855626769,
        tooltipTitle: '2021-12-30 17:13:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.12,
        time: 1640855686769,
        tooltipTitle: '2021-12-30 17:14:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.25,
        time: 1640855746769,
        tooltipTitle: '2021-12-30 17:15:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.17,
        time: 1640855806769,
        tooltipTitle: '2021-12-30 17:16:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.11,
        time: 1640855866769,
        tooltipTitle: '2021-12-30 17:17:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.15,
        time: 1640855926769,
        tooltipTitle: '2021-12-30 17:18:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.1,
        time: 1640855986769,
        tooltipTitle: '2021-12-30 17:19:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.04,
        time: 1640856046769,
        tooltipTitle: '2021-12-30 17:20:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.6,
        time: 1640856106769,
        tooltipTitle: '2021-12-30 17:21:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.44,
        time: 1640856166769,
        tooltipTitle: '2021-12-30 17:22:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 1.09,
        time: 1640856226769,
        tooltipTitle: '2021-12-30 17:23:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.5,
        time: 1640856286769,
        tooltipTitle: '2021-12-30 17:24:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.43,
        time: 1640856346769,
        tooltipTitle: '2021-12-30 17:25:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.27,
        time: 1640856406769,
        tooltipTitle: '2021-12-30 17:26:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.2,
        time: 1640856466769,
        tooltipTitle: '2021-12-30 17:27:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.38,
        time: 1640856526769,
        tooltipTitle: '2021-12-30 17:28:46',
      },
      {
        objectId: 'HOST',
        system_load_1: 0.22,
        time: 1640856586769,
        tooltipTitle: '2021-12-30 17:29:46',
      },
    ],
    animate: true,
    tooltip: { title: 'tooltipTitle', showCrosshairs: true, shared: true },
    scales: {
      time: { type: 'time', mask: 'HH:mm:ss' },
      system_load_1: {
        nice: false,
        max: 1.1640000000000001,
        min: 0.000008666666666666668,
      },
    },
    axes: { time: {}, system_load_1: {} },
    interactions: [
      { type: 'legend-data-reverse' },
      { type: 'custom-ganged-chart' },
    ],
    geometries: [
      {
        type: 'area',
        position: 'time*system_load_1',
        cfg: { connectNulls: false, sortable: true },
      },
      {
        type: 'line',
        position: 'time*system_load_1',
        cfg: { connectNulls: false, visible: true, sortable: true },
        style: { lineWidth: 2 },
      },
    ],
    annotations: [
      {
        type: 'line',
        start: ['0%', '100.00%'],
        end: ['100%', '100.00%'],
        style: { stroke: '#fb653c', lineWidth: 1, lineDash: [3, 3] },
        text: {
          position: 'start',
          content: '0.00001',
          offsetY: -4,
          offsetX: 0,
          style: { fill: '#fb653c' },
        },
      },
      {
        type: 'line',
        start: ['0%', '100.00%'],
        end: ['100%', '100.00%'],
        style: { stroke: '#e20000', lineWidth: 1, lineDash: [3, 3] },
        text: {
          position: 'start',
          content: '0.00001',
          offsetY: -4,
          offsetX: 0,
          style: { fill: '#e20000' },
        },
      },
      {
        type: 'line',
        start: ['0%', '100.00%'],
        end: ['100%', '100.00%'],
        style: { stroke: '#a61b08', lineWidth: 1, lineDash: [3, 3] },
        text: {
          position: 'start',
          content: '0.00001',
          offsetY: -4,
          offsetX: 0,
          style: { fill: '#a61b08' },
        },
      },
    ],
  });
  React.useEffect(() => {
    if (init.current) {
      const chart = chartRef.current;
      chart.annotation().clear(true);
      chart.render();
    }
  }, [options]);
  React.useEffect(() => {
    if (init.current) {
      chartRef.current?.destroy();
    }
    chartRef.current = new Chart({
      container: 'container',
      autoFit: true,
      height: 500,
      options,
    });
    chartRef.current.render();
    init.current = true;
  }, [options]);

  return (
    <div>
      <div id="container"></div>
      <br />
      <button
        onClick={() =>
          setOptions({
            data: [
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640859160858,
                tooltipTitle: '2021-12-30 18:12:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859220858,
                tooltipTitle: '2021-12-30 18:13:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.04,
                time: 1640859280858,
                tooltipTitle: '2021-12-30 18:14:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640859340858,
                tooltipTitle: '2021-12-30 18:15:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859400858,
                tooltipTitle: '2021-12-30 18:16:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859460858,
                tooltipTitle: '2021-12-30 18:17:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859520858,
                tooltipTitle: '2021-12-30 18:18:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859580858,
                tooltipTitle: '2021-12-30 18:19:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859640858,
                tooltipTitle: '2021-12-30 18:20:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.12,
                time: 1640859700858,
                tooltipTitle: '2021-12-30 18:21:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.04,
                time: 1640859760858,
                tooltipTitle: '2021-12-30 18:22:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640859820858,
                tooltipTitle: '2021-12-30 18:23:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640859880858,
                tooltipTitle: '2021-12-30 18:24:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640859940858,
                tooltipTitle: '2021-12-30 18:25:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640860000858,
                tooltipTitle: '2021-12-30 18:26:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640860060858,
                tooltipTitle: '2021-12-30 18:27:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640860120858,
                tooltipTitle: '2021-12-30 18:28:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.15,
                time: 1640860180858,
                tooltipTitle: '2021-12-30 18:29:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.05,
                time: 1640860240858,
                tooltipTitle: '2021-12-30 18:30:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640860300858,
                tooltipTitle: '2021-12-30 18:31:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.09,
                time: 1640860360858,
                tooltipTitle: '2021-12-30 18:32:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.07,
                time: 1640860420858,
                tooltipTitle: '2021-12-30 18:33:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.03,
                time: 1640860480858,
                tooltipTitle: '2021-12-30 18:34:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.3,
                time: 1640860540858,
                tooltipTitle: '2021-12-30 18:35:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.19,
                time: 1640860600858,
                tooltipTitle: '2021-12-30 18:36:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.14,
                time: 1640860660858,
                tooltipTitle: '2021-12-30 18:37:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.28,
                time: 1640860720858,
                tooltipTitle: '2021-12-30 18:38:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.15,
                time: 1640860780858,
                tooltipTitle: '2021-12-30 18:39:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.05,
                time: 1640860840858,
                tooltipTitle: '2021-12-30 18:40:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640860900858,
                tooltipTitle: '2021-12-30 18:41:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.04,
                time: 1640860960858,
                tooltipTitle: '2021-12-30 18:42:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640861020858,
                tooltipTitle: '2021-12-30 18:43:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640861080858,
                tooltipTitle: '2021-12-30 18:44:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.16,
                time: 1640861140858,
                tooltipTitle: '2021-12-30 18:45:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.17,
                time: 1640861200858,
                tooltipTitle: '2021-12-30 18:46:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.06,
                time: 1640861260858,
                tooltipTitle: '2021-12-30 18:47:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640861320858,
                tooltipTitle: '2021-12-30 18:48:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.08,
                time: 1640861380858,
                tooltipTitle: '2021-12-30 18:49:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.03,
                time: 1640861440858,
                tooltipTitle: '2021-12-30 18:50:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640861500858,
                tooltipTitle: '2021-12-30 18:51:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640861560858,
                tooltipTitle: '2021-12-30 18:52:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640861620858,
                tooltipTitle: '2021-12-30 18:53:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0,
                time: 1640861680858,
                tooltipTitle: '2021-12-30 18:54:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.06,
                time: 1640861740858,
                tooltipTitle: '2021-12-30 18:55:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640861800858,
                tooltipTitle: '2021-12-30 18:56:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640861860858,
                tooltipTitle: '2021-12-30 18:57:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.08,
                time: 1640861920858,
                tooltipTitle: '2021-12-30 18:58:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.03,
                time: 1640861980858,
                tooltipTitle: '2021-12-30 18:59:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.16,
                time: 1640862040858,
                tooltipTitle: '2021-12-30 19:00:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.06,
                time: 1640862100858,
                tooltipTitle: '2021-12-30 19:01:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640862160858,
                tooltipTitle: '2021-12-30 19:02:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.38,
                time: 1640862220858,
                tooltipTitle: '2021-12-30 19:03:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.14,
                time: 1640862280858,
                tooltipTitle: '2021-12-30 19:04:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.16,
                time: 1640862340858,
                tooltipTitle: '2021-12-30 19:05:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.06,
                time: 1640862400858,
                tooltipTitle: '2021-12-30 19:06:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640862460858,
                tooltipTitle: '2021-12-30 19:07:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.06,
                time: 1640862520858,
                tooltipTitle: '2021-12-30 19:08:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.02,
                time: 1640862580858,
                tooltipTitle: '2021-12-30 19:09:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.01,
                time: 1640862640858,
                tooltipTitle: '2021-12-30 19:10:40',
              },
              {
                objectId: 'HOST',
                system_load_1: 0.16,
                time: 1640862700858,
                tooltipTitle: '2021-12-30 19:11:40',
              },
            ],
            animate: true,
            tooltip: {
              title: 'tooltipTitle',
              showCrosshairs: true,
              shared: true,
            },
            scales: {
              time: { type: 'time', mask: 'HH:mm:ss' },
              system_load_1: {
                nice: false,
                max: 0.4053333333333333,
                min: -0.025333333333333333,
              },
            },
            axes: { time: {}, system_load_1: {} },
            interactions: [
              { type: 'legend-data-reverse' },
              { type: 'custom-ganged-chart' },
            ],
            geometries: [
              {
                type: 'area',
                position: 'time*system_load_1',
                cfg: { connectNulls: false, sortable: true },
              },
              {
                type: 'line',
                position: 'time*system_load_1',
                cfg: { connectNulls: false, visible: true, sortable: true },
                style: { lineWidth: 2 },
              },
            ],
            annotations: [
              {
                type: 'line',
                start: ['0%', '100.00%'],
                end: ['100%', '100.00%'],
                style: { stroke: '#fb653c', lineWidth: 1, lineDash: [3, 3] },
                text: {
                  position: 'start',
                  content: '0.0001',
                  offsetY: -4,
                  offsetX: 0,
                  style: { fill: '#fb653c' },
                },
              },
              {
                type: 'line',
                start: ['0%', '100.00%'],
                end: ['100%', '100.00%'],
                style: { stroke: '#e20000', lineWidth: 1, lineDash: [3, 3] },
                text: {
                  position: 'start',
                  content: '0.0001',
                  offsetY: -4,
                  offsetX: 0,
                  style: { fill: '#e20000' },
                },
              },
              {
                type: 'line',
                start: ['0%', '100.00%'],
                end: ['100%', '100.00%'],
                style: { stroke: '#a61b08', lineWidth: 1, lineDash: [3, 3] },
                text: {
                  position: 'start',
                  content: '0.0001',
                  offsetY: -4,
                  offsetX: 0,
                  style: { fill: '#a61b08' },
                },
              },
            ],
          })
        }
      >
        更新数据
      </button>
    </div>
  );
}
