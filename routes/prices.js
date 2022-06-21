const zonedata = [
  {
    weight: 0.5,
    zone1: { price: 12235.11, rate: 0.15 },
    zone2: { price: 13695.51, rate: 0.15 },
    zone3: { price: 15155.9, rate: 0.12 },
    zone4: { price: 17589.9, rate: 0.12 },
    zone5: { price: 18076.69, rate: 0.12 },
    zone6: { price: 19537.08, rate: 0.12 },
    zone7: { price: 22073.5, rate: 0.05 },
    zone8: { price: 22457.88, rate: 0.05 },
  },
  {
    weight: 1,
    zone1: { price: 12300.28, rate: 0.35 },
    zone2: { price: 13760.69, rate: 0.15 },
    zone3: { price: 15221.07, rate: 0.12 },
    zone4: { price: 17655.07, rate: 0.12 },
    zone5: { price: 18141.86, rate: 0.12 },
    zone6: { price: 19602.25, rate: 0.12 },
    zone7: { price: 22073.5, rate: 0.05 },
    zone8: { price: 22457.88, rate: 0.05 },
  },
  {
    weight: 1.5,
    zone1: { price: 12365.46, rate: 0.15 },
    zone2: { price: 13825.86, rate: 0.15 },
    zone3: { price: 15286.24, rate: 0.12 },
    zone4: { price: 17720.25, rate: 0.12 },
    zone5: { price: 18207.03, rate: 0.12 },
    zone6: { price: 19667.42, rate: 0.12 },
    zone7: { price: 22073.5, rate: 0.05 },
    zone8: { price: 22457.88, rate: 0.05 },
  },
  {
    weight: 2,
    zone1: { price: 12430.63, rate: 0.35 },
    zone2: { price: 13891.03, rate: 0.15 },
    zone3: { price: 15351.42, rate: 0.12 },
    zone4: { price: 17785.42, rate: 0.12 },
    zone5: { price: 18272.21, rate: 0.12 },
    zone6: { price: 19732.59, rate: 0.12 },
    zone7: { price: 24036.72, rate: 0.05 },
    zone8: { price: 22653.39, rate: 0.05  },
  },
  {
    weight: 2.5,
    zone1: { price: 16390.19, rate: 0.15 },
    zone2: { price: 17850.59, rate: 0.1 },
    zone3: { price: 20771.38, rate: 0.12 },
    zone4: { price: 23205.35, rate: 0.12 },
    zone5: { price: 23692.15, rate: 0.12 },
    zone6: { price: 25395.95, rate: 0.12 },
    zone7: { price: 30289.32, rate: 0.05  },
    zone8: { price: 30020.54, rate: 0.05  },
  },
  {
    weight: 3,
    zone1: { price: 19862.95, rate: 0.35 },
    zone2: { price: 21323.35, rate: 0.1 },
    zone3: { price: 25704.53, rate: 0.08 },
    zone4: { price: 28138.5, rate: 0.08 },
    zone5: { price: 28625.3, rate: 0.08 },
    zone6: { price: 31059.29, rate: 0.08 },
    zone7: { price: 36541.9, rate: 0.05  },
    zone8: { price: 37144.29, rate: 0.05  },
  },
  {
    weight: 3.5,
    zone1: { price: 23335.71, rate: 0.28 },
    zone2: { price: 24796.11, rate: 0.1 },
    zone3: { price: 30637.67, rate: 0.08 },
    zone4: { price: 33071.65, rate: 0.08 },
    zone5: { price: 33558.45, rate: 0.08 },
    zone6: { price: 36722.63, rate: 0.08 },
    zone7: { price: 42794.47, rate: 0.05  },
    zone8: { price: 44268.03, rate: 0.05 },
  },
  {
    weight: 4,
    zone1: { price: 26808.47, rate: 0.28 },
    zone2: { price: 28268.87, rate: 0.1 },
    zone3: { price: 35570.82, rate: 0.08 },
    zone4: { price: 38004.8, rate: 0.08 },
    zone5: { price: 38491.6, rate: 0.08 },
    zone6: { price: 42385.97, rate: 0.08 },
    zone7: { price: 49047.05, rate: 0.05  },
    zone8: { price: 51391.77, rate: 0.05  },
  },
  {
    weight: 4.5,
    zone1: { price: 30281.23, rate: 0.28 },
    zone2: { price: 31741.63, rate: 0.1 },
    zone3: { price: 40503.97, rate: 0.08 },
    zone4: { price: 42937.95, rate: 0.08 },
    zone5: { price: 43424.75, rate: 0.08 },
    zone6: { price: 48049.32, rate: 0.08 },
    zone7: { price: 55299.63, rate: 0.05  },
    zone8: { price: 58515.52, rate: 0.05  },
  },
  {
    weight: 5,
    zone1: { price: 33753.99, rate: 0.28 },
    zone2: { price: 35214.39, rate: 0.08 },
    zone3: { price: 45437.12, rate: 0.08 },
    zone4: { price: 47871.09, rate: 0.08 },
    zone5: { price: 48357.89, rate: 0.08 },
    zone6: { price: 53712.66, rate: 0.08 },
    zone7: { price: 61552.2, rate: 0.05  },
    zone8: { price: 65639.26, rate: 0.05  },
  },
  {
    weight: 5.5,
    zone1: { price: 36642.58, rate: 0.28 },
    zone2: { price: 38395.08, rate: 0.08 },
    zone3: { price: 49883.47, rate: 0.08 },
    zone4: { price: 52317.44, rate: 0.08 },
    zone5: { price: 52804.24, rate: 0.08 },
    zone6: { price: 58159.01, rate: 0.08 },
    zone7: { price: 66587.78, rate: 0.05  },
    zone8: { price: 72763, rate: 0.05  },
  },
  {
    weight: 6,
    zone1: { price: 39531.18, rate: 0.28 },
    zone2: { price: 41575.76, rate: 0.08 },
    zone3: { price: 54329.81, rate: 0.08 },
    zone4: { price: 56763.79, rate: 0.08 },
    zone5: { price: 57250.59, rate: 0.08 },
    zone6: { price: 62605.35, rate: 0.08 },
    zone7: { price: 71623.37, rate: 0.05 },
    zone8: { price: 79886.74, rate: 0.05  },
  },
  {
    weight: 6.5,
    zone1: { price: 42419.77, rate: 0.28 },
    zone2: { price: 44756.44, rate: 0.08 },
    zone3: { price: 58776.16, rate: 0.08 },
    zone4: { price: 61210.14, rate: 0.08 },
    zone5: { price: 61696.94, rate: 0.08 },
    zone6: { price: 67051.7, rate: 0.08 },
    zone7: { price: 76658.95, rate: 0.05  },
    zone8: { price: 87010.49, rate: 0.05  },
  },
  {
    weight: 7,
    zone1: { price: 45308.36, rate: 0.28 },
    zone2: { price: 47937.13, rate: 0.08 },
    zone3: { price: 63222.51, rate: 0.07 },
    zone4: { price: 65656.49, rate: 0.07 },
    zone5: { price: 66143.29, rate: 0.07 },
    zone6: { price: 71498.05, rate: 0.07 },
    zone7: { price: 81694.53, rate: 0.05  },
    zone8: { price: 94134.23, rate: 0.05 },
  },
  {
    weight: 7.5,
    zone1: { price: 48196.95, rate: 0.28 },
    zone2: { price: 51117.81, rate: 0.08 },
    zone3: { price: 67668.86, rate: 0.07 },
    zone4: { price: 70102.83, rate: 0.07 },
    zone5: { price: 70589.63, rate: 0.07 },
    zone6: { price: 75944.4, rate: 0.07 },
    zone7: { price: 86730.11, rate: 0.05  },
    zone8: { price: 101257.97, rate: 0.05 },
  },
  {
    weight: 8,
    zone1: { price: 51085.55, rate: 0.28 },
    zone2: { price: 54298.49, rate: 0.08 },
    zone3: { price: 72115.21, rate: 0.07 },
    zone4: { price: 74549.18, rate: 0.07 },
    zone5: { price: 75035.98, rate: 0.07 },
    zone6: { price: 80390.74, rate: 0.07 },
    zone7: { price: 91765.7, rate: 0.05 },
    zone8: { price: 108381.72, rate: 0.05 },
  },
  {
    weight: 8.5,
    zone1: { price: 53974.14, rate: 0.28 },
    zone2: { price: 57479.18, rate: 0.08 },
    zone3: { price: 76561.55, rate: 0.07 },
    zone4: { price: 78995.53, rate: 0.07 },
    zone5: { price: 79482.33, rate: 0.07 },
    zone6: { price: 84837.09, rate: 0.07 },
    zone7: { price: 96801.28, rate: 0.05  },
    zone8: { price: 115505.46, rate: 0.05 },
  },
  {
    weight: 9,
    zone1: { price: 56862.73, rate: 0.28 },
    zone2: { price: 60659.86, rate: 0.08 },
    zone3: { price: 81007.9, rate: 0.07 },
    zone4: { price: 83441.88, rate: 0.07 },
    zone5: { price: 83928.68, rate: 0.07 },
    zone6: { price: 89283.44, rate: 0.07 },
    zone7: { price: 101836.86, rate: 0.05  },
    zone8: { price: 122629.2, rate: 0.05 },
  },
  {
    weight: 9.5,
    zone1: { price: 59751.32, rate: 0.28 },
    zone2: { price: 63840.54, rate: 0.08 },
    zone3: { price: 85454.25, rate: 0.07 },
    zone4: { price: 87888.22, rate: 0.07 },
    zone5: { price: 88375.02, rate: 0.07 },
    zone6: { price: 93729.79, rate: 0.07 },
    zone7: { price: 106872.44, rate: 0.05  },
    zone8: { price: 129752.94, rate: 0.05  },
  },
  {
    weight: 10,
    zone1: { price: 62639.91, rate: 0.28 },
    zone2: { price: 67021.22, rate: 0.08 },
    zone3: { price: 89900.6, rate: 0.07 },
    zone4: { price: 92334.57, rate: 0.07 },
    zone5: { price: 92821.37, rate: 0.07 },
    zone6: { price: 98176.14, rate: 0.07 },
    zone7: { price: 111908.02, rate: 0.05 },
    zone8: { price: 136876.69,rate: 0.05 },
  },
  {
    weight: 10.5,
    zone1: { price: 65528.51, rate: 0.28 },
    zone2: { price: 70201.91, rate: 0.08 },
    zone3: { price: 94346.95, rate: 0.07 },
    zone4: { price: 96780.92, rate: 0.07 },
    zone5: { price: 97267.72, rate: 0.07 },
    zone6: { price: 102622.48, rate: 0.07 },
    zone7: { price: 116943.61, rate: 0.05  },
    zone8: { price: 144000.43, rate: 0.05  },
  },
  {
    weight: 11,
    zone1: { price: 68417.1, rate: 0.28 },
    zone2: { price: 73382.59, rate: 0.08 },
    zone3: { price: 98793.29, rate: 0.07 },
    zone4: { price: 101227.27, rate: 0.07 },
    zone5: { price: 101714.07, rate: 0.07 },
    zone6: { price: 107068.83, rate: 0.07 },
    zone7: { price: 121979.19, rate: 0.05  },
    zone8: { price: 151124.17, rate: 0.05 },
  },
  {
    weight: 11.5,
    zone1: { price: 71305.69, rate: 0.28 },
    zone2: { price: 76563.27, rate: 0.08 },
    zone3: { price: 103239.64, rate: 0.07 },
    zone4: { price: 105673.62, rate: 0.07 },
    zone5: { price: 106160.42, rate: 0.07 },
    zone6: { price: 111515.18, rate: 0.07 },
    zone7: { price: 127014.77, rate: 0.05  },
    zone8: { price: 158247.91, rate: 0.05 },
  },
  {
    weight: 12,
    zone1: { price: 74194.28, rate: 0.28 },
    zone2: { price: 79743.96, rate: 0.08 },
    zone3: { price: 107685.99, rate: 0.07 },
    zone4: { price: 110119.96, rate: 0.07 },
    zone5: { price: 110606.76, rate: 0.07 },
    zone6: { price: 115961.53, rate: 0.07 },
    zone7: { price: 132050.35, rate: 0.05  },
    zone8: { price: 165371.66, rate: 0.05 },
  },
  {
    weight: 12.5,
    zone1: { price: 77082.88, rate: 0.28 },
    zone2: { price: 82924.64, rate: 0.08 },
    zone3: { price: 112132.34, rate: 0.07 },
    zone4: { price: 114566.31, rate: 0.07 },
    zone5: { price: 115053.11, rate: 0.07 },
    zone6: { price: 120407.87, rate: 0.07 },
    zone7: { price: 137085.94, rate: 0.05  },
    zone8: { price: 172495.4, rate: 0.05  },
  },
  {
    weight: 13,
    zone1: { price: 79971.47, rate: 0.28 },
    zone2: { price: 86105.32, rate: 0.08 },
    zone3: { price: 116578.68, rate: 0.07 },
    zone4: { price: 119012.66, rate: 0.07 },
    zone5: { price: 119499.46, rate: 0.07 },
    zone6: { price: 124854.22, rate: 0.07 },
    zone7: { price: 142121.52, rate: 0.05 },
    zone8: { price: 179619.14, rate: 0.05  },
  },
  {
    weight: 13.5,
    zone1: { price: 82860.06, rate: 0.28 },
    zone2: { price: 89286.01, rate: 0.08 },
    zone3: { price: 121025.03, rate: 0.07 },
    zone4: { price: 123459.01, rate: 0.07 },
    zone5: { price: 123945.81, rate: 0.07 },
    zone6: { price: 129300.57, rate: 0.07 },
    zone7: { price: 147157.1, rate: 0.05  },
    zone8: { price: 186742.89, rate: 0.05 },
  },
  {
    weight: 14,
    zone1: { price: 85748.65, rate: 0.28 },
    zone2: { price: 92466.69, rate: 0.08 },
    zone3: { price: 125471.38, rate: 0.07 },
    zone4: { price: 127905.35, rate: 0.07 },
    zone5: { price: 128392.15, rate: 0.07 },
    zone6: { price: 133746.92, rate: 0.07 },
    zone7: { price: 152192.68, rate: 0.05 },
    zone8: { price: 193866.63, rate: 0.05 },
  },
  {
    weight: 14.5,
    zone1: { price: 88637.24, rate: 0.28 },
    zone2: { price: 95647.37, rate: 0.08 },
    zone3: { price: 129917.73, rate: 0.07 },
    zone4: { price: 132351.7, rate: 0.07 },
    zone5: { price: 132838.5, rate: 0.07 },
    zone6: { price: 138193.27, rate: 0.07 },
    zone7: { price: 157228.26, rate: 0.05 },
    zone8: { price: 200990.37, rate: 0.05  },
  },
  {
    weight: 15,
    zone1: { price: 91525.84, rate: 0.28 },
    zone2: { price: 98828.06, rate: 0.08 },
    zone3: { price: 134364.08, rate: 0.07 },
    zone4: { price: 136798.05, rate: 0.07 },
    zone5: { price: 137284.85, rate: 0.07 },
    zone6: { price: 142639.61, rate: 0.07 },
    zone7: { price: 162263.85, rate: 0.05 },
    zone8: { price: 208114.11, rate: 0.05 },
  },
  {
    weight: 15.5,
    zone1: { price: 94414.43, rate: 0.28 },
    zone2: { price: 102008.74, rate: 0.08 },
    zone3: { price: 138810.42, rate: 0.07 },
    zone4: { price: 141244.4, rate: 0.07 },
    zone5: { price: 141731.2, rate: 0.07 },
    zone6: { price: 147085.96, rate: 0.07 },
    zone7: { price: 167299.43, rate: 0.03 },
    zone8: { price: 215237.86, rate: 0.02 },
  },
  {
    weight: 16,
    zone1: { price: 97303.02, rate: 0.28 },
    zone2: { price: 105189.42, rate: 0.08 },
    zone3: { price: 143256.77, rate: 0.07 },
    zone4: { price: 145690.75, rate: 0.07 },
    zone5: { price: 146177.55, rate: 0.07 },
    zone6: { price: 151532.31, rate: 0.07 },
    zone7: { price: 172335.01, rate: 0.03 },
    zone8: { price: 222361.6, rate: 0.02 },
  },
  {
    weight: 16.5,
    zone1: { price: 100191.61, rate: 0.28 },
    zone2: { price: 108370.11, rate: 0.08 },
    zone3: { price: 147703.12, rate: 0.07 },
    zone4: { price: 150137.09, rate: 0.07 },
    zone5: { price: 150623.89, rate: 0.07 },
    zone6: { price: 155978.66, rate: 0.07 },
    zone7: { price: 177370.59, rate: 0.03 },
    zone8: { price: 229485.34, rate: 0.02 },
  },
  {
    weight: 17,
    zone1: { price: 103080.2, rate: 0.28 },
    zone2: { price: 111550.79, rate: 0.08 },
    zone3: { price: 152149.47, rate: 0.07 },
    zone4: { price: 154583.44, rate: 0.07 },
    zone5: { price: 155070.24, rate: 0.07 },
    zone6: { price: 160425, rate: 0.07 },
    zone7: { price: 182406.17, rate: 0.03 },
    zone8: { price: 236609.09, rate: 0.02 },
  },
  {
    weight: 17.5,
    zone1: { price: 105968.8, rate: 0.28 },
    zone2: { price: 114731.47, rate: 0.08 },
    zone3: { price: 156595.81, rate: 0.07 },
    zone4: { price: 159029.79, rate: 0.07 },
    zone5: { price: 159516.59, rate: 0.07 },
    zone6: { price: 164871.35, rate: 0.07 },
    zone7: { price: 187441.76, rate: 0.03 },
    zone8: { price: 243732.83, rate: 0.02 },
  },
  {
    weight: 18,
    zone1: { price: 108857.39, rate: 0.28 },
    zone2: { price: 117912.15, rate: 0.08 },
    zone3: { price: 161042.16, rate: 0.07 },
    zone4: { price: 163476.14, rate: 0.07 },
    zone5: { price: 163962.94, rate: 0.07 },
    zone6: { price: 169317.7, rate: 0.07 },
    zone7: { price: 192477.34, rate: 0.03 },
    zone8: { price: 250856.57, rate: 0.02 },
  },
  {
    weight: 18.5,
    zone1: { price: 111745.98, rate: 0.28 },
    zone2: { price: 121092.84, rate: 0.08 },
    zone3: { price: 165488.51, rate: 0.07 },
    zone4: { price: 167922.48, rate: 0.07 },
    zone5: { price: 168409.29, rate: 0.07 },
    zone6: { price: 173764.05, rate: 0.07 },
    zone7: { price: 197512.92, rate: 0.03 },
    zone8: { price: 257980.31, rate: 0.02 },
  },
  {
    weight: 19,
    zone1: { price: 114634.57, rate: 0.28 },
    zone2: { price: 124273.52, rate: 0.08 },
    zone3: { price: 169934.86, rate: 0.07 },
    zone4: { price: 172368.83, rate: 0.07 },
    zone5: { price: 172855.63, rate: 0.07 },
    zone6: { price: 178210.4, rate: 0.07 },
    zone7: { price: 202548.5, rate: 0.03 },
    zone8: { price: 265104.06, rate: 0.02 },
  },
  {
    weight: 19.5,
    zone1: { price: 117523.17, rate: 0.28 },
    zone2: { price: 127454.2, rate: 0.08 },
    zone3: { price: 174381.21, rate: 0.07 },
    zone4: { price: 176815.18, rate: 0.07 },
    zone5: { price: 177301.98, rate: 0.07 },
    zone6: { price: 182656.74, rate: 0.07 },
    zone7: { price: 207584.09, rate: 0.03 },
    zone8: { price: 272227.8, rate: 0.02 },
  },
  {
    weight: 20,
    zone1: { price: 120411.76, rate: 0.15 },
    zone2: { price: 130634.89, rate: 0.05 },
    zone3: { price: 178827.55, rate: 0.03 },
    zone4: { price: 181261.53, rate: 0.03 },
    zone5: { price: 181748.33, rate: 0.03 },
    zone6: { price: 187103.09, rate: 0.03 },
    zone7: { price: 212619.67, rate: 0.03 },
    zone8: { price: 279351.54, rate: 0.02 },
  },
  {
    weight: 20.5,
    zone1: { price: 123397.73, rate: 0.15 },
    zone2: { price: 133620.86, rate: 0.05 },
    zone3: { price: 183273.9, rate: 0.03 },
    zone4: { price: 185707.88, rate: 0.03 },
    zone5: { price: 186194.68, rate: 0.03 },
    zone6: { price: 191549.44, rate: 0.03 },
    zone7: { price: 217655.25, rate: 0.03 },
    zone8: { price: 285258.29, rate: 0.02 },
  },
  {
    weight: 21,
    zone1: { price: 126383.71, rate: 0.15 },
    zone2: { price: 136606.83, rate: 0.05 },
    zone3: { price: 187720.25, rate: 0.03 },
    zone4: { price: 190154.22, rate: 0.03 },
    zone5: { price: 190641.02, rate: 0.03 },
    zone6: { price: 195995.79, rate: 0.03 },
    zone7: { price: 222690.83, rate: 0.03 },
    zone8: { price: 291165.04, rate: 0.02 },
  },
  {
    weight: 21.5,
    zone1: { price: 129369.68, rate: 0.15 },
    zone2: { price: 139592.81, rate: 0.05 },
    zone3: { price: 192166.6, rate: 0.03 },
    zone4: { price: 194600.57, rate: 0.03 },
    zone5: { price: 195087.37, rate: 0.03 },
    zone6: { price: 200442.14, rate: 0.03 },
    zone7: { price: 227726.41, rate: 0.03 },
    zone8: { price: 297071.79, rate: 0.02 },
  },
  {
    weight: 22,
    zone1: { price: 132355.65, rate: 0.15 },
    zone2: { price: 142578.78, rate: 0.05 },
    zone3: { price: 196612.94, rate: 0.03 },
    zone4: { price: 199046.92, rate: 0.03 },
    zone5: { price: 199533.72, rate: 0.03 },
    zone6: { price: 204888.48, rate: 0.03 },
    zone7: { price: 232762, rate: 0.03 },
    zone8: { price: 302978.54, rate: 0.02 },
  },
  {
    weight: 22.5,
    zone1: { price: 135341.63, rate: 0.15 },
    zone2: { price: 145564.76, rate: 0.05 },
    zone3: { price: 201059.29, rate: 0.03 },
    zone4: { price: 203493.27, rate: 0.03 },
    zone5: { price: 203980.07, rate: 0.03 },
    zone6: { price: 209334.83, rate: 0.03 },
    zone7: { price: 237797.58, rate: 0.03 },
    zone8: { price: 308885.29, rate: 0.02 },
  },
  {
    weight: 23,
    zone1: { price: 138327.6, rate: 0.15 },
    zone2: { price: 148550.73, rate: 0.05 },
    zone3: { price: 205505.64, rate: 0.03 },
    zone4: { price: 207939.62, rate: 0.03 },
    zone5: { price: 208426.42, rate: 0.03 },
    zone6: { price: 213781.18, rate: 0.03 },
    zone7: { price: 242833.16, rate: 0.03 },
    zone8: { price: 314792.04, rate: 0.02 },
  },
  {
    weight: 23.5,
    zone1: { price: 141313.57, rate: 0.15 },
    zone2: { price: 151536.7, rate: 0.05 },
    zone3: { price: 209951.99, rate: 0.03 },
    zone4: { price: 212385.96, rate: 0.03 },
    zone5: { price: 212872.76, rate: 0.03 },
    zone6: { price: 218227.53, rate: 0.03 },
    zone7: { price: 247868.74, rate: 0.03 },
    zone8: { price: 320698.78, rate: 0.02 },
  },
  {
    weight: 24,
    zone1: { price: 144299.55, rate: 0.15 },
    zone2: { price: 154522.68, rate: 0.05 },
    zone3: { price: 214398.34, rate: 0.03 },
    zone4: { price: 216832.31, rate: 0.03 },
    zone5: { price: 217319.11, rate: 0.03 },
    zone6: { price: 222673.87, rate: 0.03 },
    zone7: { price: 252904.33, rate: 0.03 },
    zone8: { price: 326605.53, rate: 0.02 },
  },
  {
    weight: 24.5,
    zone1: { price: 147285.52, rate: 0.15 },
    zone2: { price: 157508.65, rate: 0.05 },
    zone3: { price: 218844.68, rate: 0.03 },
    zone4: { price: 221278.66, rate: 0.03 },
    zone5: { price: 221765.46, rate: 0.03 },
    zone6: { price: 227120.22, rate: 0.03 },
    zone7: { price: 257939.91, rate: 0.03 },
    zone8: { price: 332512.28, rate: 0.02 },
  },
  {
    weight: 25,
    zone1: { price: 150271.5, rate: 0.15 },
    zone2: { price: 160494.62, rate: 0.05 },
    zone3: { price: 223291.03, rate: 0.03 },
    zone4: { price: 225725.01, rate: 0.03 },
    zone5: { price: 226211.81, rate: 0.03 },
    zone6: { price: 231566.57, rate: 0.03 },
    zone7: { price: 262975.49, rate: 0.03 },
    zone8: { price: 338419.03, rate: 0.02 },
  },
  {
    weight: 25.5,
    zone1: { price: 153257.47, rate: 0.15 },
    zone2: { price: 163480.6, rate: 0.05 },
    zone3: { price: 227737.38, rate: 0.03 },
    zone4: { price: 230171.35, rate: 0.03 },
    zone5: { price: 230658.15, rate: 0.03 },
    zone6: { price: 236012.92, rate: 0.03 },
    zone7: { price: 268011.07, rate: 0.03 },
    zone8: { price: 344325.78, rate: 0.02 },
  },
  {
    weight: 26,
    zone1: { price: 156243.44, rate: 0.15 },
    zone2: { price: 166466.57, rate: 0.05 },
    zone3: { price: 232183.73, rate: 0.03 },
    zone4: { price: 234617.7, rate: 0.03 },
    zone5: { price: 235104.5, rate: 0.03 },
    zone6: { price: 240459.27, rate: 0.03 },
    zone7: { price: 273046.65, rate: 0.03 },
    zone8: { price: 350232.53, rate: 0.02 },
  },
  {
    weight: 26.5,
    zone1: { price: 159229.42, rate: 0.15 },
    zone2: { price: 169452.55, rate: 0.05 },
    zone3: { price: 236630.08, rate: 0.03 },
    zone4: { price: 239064.05, rate: 0.03 },
    zone5: { price: 239550.85, rate: 0.03 },
    zone6: { price: 244905.61, rate: 0.03 },
    zone7: { price: 278082.24, rate: 0.03 },
    zone8: { price: 356139.28, rate: 0.02 },
  },
  {
    weight: 27,
    zone1: { price: 162215.39, rate: 0.15 },
    zone2: { price: 172438.52, rate: 0.05 },
    zone3: { price: 241076.42, rate: 0.03 },
    zone4: { price: 243510.4, rate: 0.03 },
    zone5: { price: 243997.2, rate: 0.03 },
    zone6: { price: 249351.96, rate: 0.03 },
    zone7: { price: 283117.82, rate: 0.03 },
    zone8: { price: 362046.03, rate: 0.02 },
  },
  {
    weight: 27.5,
    zone1: { price: 165201.36, rate: 0.15 },
    zone2: { price: 175424.49, rate: 0.05 },
    zone3: { price: 245522.77, rate: 0.03 },
    zone4: { price: 247956.75, rate: 0.03 },
    zone5: { price: 248443.55, rate: 0.03 },
    zone6: { price: 253798.31, rate: 0.03 },
    zone7: { price: 288153.4, rate: 0.03 },
    zone8: { price: 367952.77, rate: 0.02 },
  },
  {
    weight: 28,
    zone1: { price: 168187.34, rate: 0.15 },
    zone2: { price: 178410.47, rate: 0.05 },
    zone3: { price: 249969.12, rate: 0.03 },
    zone4: { price: 252403.09, rate: 0.03 },
    zone5: { price: 252889.89, rate: 0.03 },
    zone6: { price: 258244.66, rate: 0.03 },
    zone7: { price: 293188.98, rate: 0.03 },
    zone8: { price: 373859.52, rate: 0.02 },
  },
  {
    weight: 28.5,
    zone1: { price: 171173.31, rate: 0.15 },
    zone2: { price: 181396.44, rate: 0.05 },
    zone3: { price: 254415.47, rate: 0.03 },
    zone4: { price: 256849.44, rate: 0.03 },
    zone5: { price: 257336.24, rate: 0.03 },
    zone6: { price: 262691, rate: 0.03 },
    zone7: { price: 298224.57, rate: 0.03 },
    zone8: { price: 379766.27, rate: 0.02 },
  },
  {
    weight: 29,
    zone1: { price: 174159.29, rate: 0.15 },
    zone2: { price: 184382.41, rate: 0.05 },
    zone3: { price: 258861.81, rate: 0.03 },
    zone4: { price: 261295.79, rate: 0.03 },
    zone5: { price: 261782.59, rate: 0.03 },
    zone6: { price: 267137.35, rate: 0.03 },
    zone7: { price: 303260.15, rate: 0.03 },
    zone8: { price: 385673.02, rate: 0.02 },
  },
  {
    weight: 29.5,
    zone1: { price: 177145.26, rate: 0.15 },
    zone2: { price: 187368.39, rate: 0.05 },
    zone3: { price: 263308.16, rate: 0.03 },
    zone4: { price: 265742.14, rate: 0.03 },
    zone5: { price: 266228.94, rate: 0.03 },
    zone6: { price: 271583.7, rate: 0.03 },
    zone7: { price: 308295.73, rate: 0.03 },
    zone8: { price: 391579.77, rate: 0.02 },
  },
  {
    weight: 30,
    zone1: { price: 180131.23, rate: 0.15 },
    zone2: { price: 190354.36, rate: 0.05 },
    zone3: { price: 267754.51, rate: 0.03 },
    zone4: { price: 270188.48, rate: 0.03 },
    zone5: { price: 270675.28, rate: 0.03 },
    zone6: { price: 276030.05, rate: 0.03 },
    zone7: { price: 313331.31, rate: 0.03 },
    zone8: { price: 397486.52, rate: 0.02 },
  },
  {
    weight: 31,
    zone1: { price: 183182.38, rate: 0.15 },
    zone2: { price: 193405.51, rate: 0.05 },
    zone3: { price: 272266.03, rate: 0.03 },
    zone4: { price: 274700, rate: 0.03 },
    zone5: { price: 275186.8, rate: 0.03 },
    zone6: { price: 280541.57, rate: 0.03 },
    zone7: { price: 319021.3, rate: 0.03 },
    zone8: { price: 403458.44, rate: 0.02 },
  },
  {
    weight: 32,
    zone1: { price: 186233.52, rate: 0.15 },
    zone2: { price: 196456.65, rate: 0.05 },
    zone3: { price: 276777.55, rate: 0.03 },
    zone4: { price: 279211.52, rate: 0.03 },
    zone5: { price: 279698.32, rate: 0.03 },
    zone6: { price: 285053.09, rate: 0.03 },
    zone7: { price: 324711.29, rate: 0.03 },
    zone8: { price: 409430.36, rate: 0.02 },
  },
  {
    weight: 33,
    zone1: { price: 189284.67, rate: 0.15 },
    zone2: { price: 199507.8, rate: 0.05 },
    zone3: { price: 281289.07, rate: 0.03 },
    zone4: { price: 283723.04, rate: 0.03 },
    zone5: { price: 284209.84, rate: 0.03 },
    zone6: { price: 289564.61, rate: 0.03 },
    zone7: { price: 330401.28, rate: 0.03 },
    zone8: { price: 415402.28, rate: 0.02 },
  },
  {
    weight: 34,
    zone1: { price: 192335.82, rate: 0.15 },
    zone2: { price: 202558.94, rate: 0.05 },
    zone3: { price: 285800.59, rate: 0.03 },
    zone4: { price: 288234.56, rate: 0.03 },
    zone5: { price: 288721.36, rate: 0.03 },
    zone6: { price: 294076.13, rate: 0.03 },
    zone7: { price: 336091.27, rate: 0.03 },
    zone8: { price: 421374.2, rate: 0.02 },
  },
  {
    weight: 35,
    zone1: { price: 195386.96, rate: 0.15 },
    zone2: { price: 205610.09, rate: 0.05 },
    zone3: { price: 290312.11, rate: 0.03 },
    zone4: { price: 292746.08, rate: 0.03 },
    zone5: { price: 293232.88, rate: 0.03 },
    zone6: { price: 298587.65, rate: 0.03 },
    zone7: { price: 341781.25, rate: 0.03 },
    zone8: { price: 427346.12, rate: 0.02 },
  },
  {
    weight: 36,
    zone1: { price: 198438.11, rate: 0.15 },
    zone2: { price: 208661.24, rate: 0.05 },
    zone3: { price: 294823.63, rate: 0.03 },
    zone4: { price: 297257.6, rate: 0.03 },
    zone5: { price: 297744.4, rate: 0.03 },
    zone6: { price: 303099.17, rate: 0.03 },
    zone7: { price: 347471.24, rate: 0.03 },
    zone8: { price: 433318.04, rate: 0.02 },
  },
  {
    weight: 37,
    zone1: { price: 201489.25, rate: 0.15 },
    zone2: { price: 211712.38, rate: 0.05 },
    zone3: { price: 299335.15, rate: 0.03 },
    zone4: { price: 301769.12, rate: 0.03 },
    zone5: { price: 302255.92, rate: 0.03 },
    zone6: { price: 307610.69, rate: 0.03 },
    zone7: { price: 353161.23, rate: 0.03 },
    zone8: { price: 439289.96, rate: 0.02 },
  },
  {
    weight: 38,
    zone1: { price: 204540.4, rate: 0.15 },
    zone2: { price: 214763.53, rate: 0.05 },
    zone3: { price: 303846.67, rate: 0.03 },
    zone4: { price: 306280.64, rate: 0.03 },
    zone5: { price: 306767.44, rate: 0.03 },
    zone6: { price: 312122.21, rate: 0.03 },
    zone7: { price: 358851.22, rate: 0.03 },
    zone8: { price: 445261.88, rate: 0.02 },
  },
  {
    weight: 39,
    zone1: { price: 207591.54, rate: 0.15 },
    zone2: { price: 217814.67, rate: 0.05 },
    zone3: { price: 308358.19, rate: 0.03 },
    zone4: { price: 310792.16, rate: 0.03 },
    zone5: { price: 311278.96, rate: 0.03 },
    zone6: { price: 316633.73, rate: 0.03 },
    zone7: { price: 364541.21, rate: 0.03 },
    zone8: { price: 451233.8, rate: 0.02 },
  },
  {
    weight: 40,
    zone1: { price: 210642.69, rate: 0.15 },
    zone2: { price: 220865.82, rate: 0.05 },
    zone3: { price: 312869.71, rate: 0.03 },
    zone4: { price: 315303.68, rate: 0.03 },
    zone5: { price: 315790.48, rate: 0.03 },
    zone6: { price: 321145.24, rate: 0.03 },
    zone7: { price: 370231.2, rate: 0.03 },
    zone8: { price: 457205.72, rate: 0.02 },
  },
  {
    weight: 41,
    zone1: { price: 213693.83, rate: 0.15 },
    zone2: { price: 223916.96, rate: 0.05 },
    zone3: { price: 317381.23, rate: 0.03 },
    zone4: { price: 319815.2, rate: 0.03 },
    zone5: { price: 320302, rate: 0.03 },
    zone6: { price: 325656.76, rate: 0.03 },
    zone7: { price: 375921.18, rate: 0.03 },
    zone8: { price: 463177.64, rate: 0.02 },
  },
  {
    weight: 42,
    zone1: { price: 216744.98, rate: 0.15 },
    zone2: { price: 226968.11, rate: 0.05 },
    zone3: { price: 321892.75, rate: 0.03 },
    zone4: { price: 324326.72, rate: 0.03 },
    zone5: { price: 324813.52, rate: 0.03 },
    zone6: { price: 330168.28, rate: 0.03 },
    zone7: { price: 381611.17, rate: 0.03 },
    zone8: { price: 469149.57, rate: 0.02 },
  },
  {
    weight: 43,
    zone1: { price: 219796.13, rate: 0.15 },
    zone2: { price: 230019.26, rate: 0.05 },
    zone3: { price: 326404.27, rate: 0.03 },
    zone4: { price: 328838.24, rate: 0.03 },
    zone5: { price: 329325.04, rate: 0.03 },
    zone6: { price: 334679.8, rate: 0.03 },
    zone7: { price: 387301.16, rate: 0.03 },
    zone8: { price: 475121.49, rate: 0.02 },
  },
  {
    weight: 44,
    zone1: { price: 222847.27, rate: 0.15 },
    zone2: { price: 233070.4, rate: 0.05 },
    zone3: { price: 330915.79, rate: 0.03 },
    zone4: { price: 333349.76, rate: 0.03 },
    zone5: { price: 333836.56, rate: 0.03 },
    zone6: { price: 339191.32, rate: 0.03 },
    zone7: { price: 392991.15, rate: 0.03 },
    zone8: { price: 481093.41, rate: 0.02 },
  },
  {
    weight: 45,
    zone1: { price: 225898.42, rate: 0.15 },
    zone2: { price: 236121.55, rate: 0.05 },
    zone3: { price: 335427.31, rate: 0.03 },
    zone4: { price: 337861.28, rate: 0.03 },
    zone5: { price: 338348.08, rate: 0.03 },
    zone6: { price: 343702.84, rate: 0.03 },
    zone7: { price: 398681.14, rate: 0.03 },
    zone8: { price: 487065.33, rate: 0.02 },
  },
  {
    weight: 46,
    zone1: { price: 228949.56, rate: 0.15 },
    zone2: { price: 239172.69, rate: 0.05 },
    zone3: { price: 339938.82, rate: 0.03 },
    zone4: { price: 342372.8, rate: 0.03 },
    zone5: { price: 342859.6, rate: 0.03 },
    zone6: { price: 348214.36, rate: 0.03 },
    zone7: { price: 404371.13, rate: 0.03 },
    zone8: { price: 493037.25, rate: 0.02 },
  },
  {
    weight: 47,
    zone1: { price: 232000.71, rate: 0.15 },
    zone2: { price: 242223.84, rate: 0.05 },
    zone3: { price: 344450.34, rate: 0.03 },
    zone4: { price: 346884.32, rate: 0.03 },
    zone5: { price: 347371.12, rate: 0.03 },
    zone6: { price: 352725.88, rate: 0.03 },
    zone7: { price: 410061.12, rate: 0.03 },
    zone8: { price: 499009.17, rate: 0.02 },
  },
  {
    weight: 48,
    zone1: { price: 235051.85, rate: 0.15 },
    zone2: { price: 245274.98, rate: 0.05 },
    zone3: { price: 348961.86, rate: 0.03 },
    zone4: { price: 351395.84, rate: 0.03 },
    zone5: { price: 351882.64, rate: 0.03 },
    zone6: { price: 357237.4, rate: 0.03 },
    zone7: { price: 415751.1, rate: 0.03 },
    zone8: { price: 504981.09, rate: 0.02 },
  },
  {
    weight: 49,
    zone1: { price: 238103, rate: 0.15 },
    zone2: { price: 248326.13, rate: 0.05 },
    zone3: { price: 353473.38, rate: 0.03 },
    zone4: { price: 355907.36, rate: 0.03 },
    zone5: { price: 356394.16, rate: 0.03 },
    zone6: { price: 361748.92, rate: 0.03 },
    zone7: { price: 421441.09, rate: 0.03 },
    zone8: { price: 510953.01, rate: 0.02 },
  },
  {
    weight: 50,
    zone1: { price: 241154.15, rate: 0.15 },
    zone2: { price: 251377.27, rate: 0.05 },
    zone3: { price: 357984.9, rate: 0.03 },
    zone4: { price: 360418.88, rate: 0.03 },
    zone5: { price: 360905.68, rate: 0.03 },
    zone6: { price: 366260.44, rate: 0.03 },
    zone7: { price: 427131.08, rate: 0.03 },
    zone8: { price: 516924.93, rate: 0.02 },
  },
  {
    weight: 51,
    zone1: { price: 244205.29, rate: 0.15 },
    zone2: { price: 254428.42, rate: 0.05 },
    zone3: { price: 362496.42, rate: 0.03 },
    zone4: { price: 364930.4, rate: 0.03 },
    zone5: { price: 365417.2, rate: 0.03 },
    zone6: { price: 370771.96, rate: 0.03 },
    zone7: { price: 432821.07, rate: 0.03 },
    zone8: { price: 522896.85, rate: 0.02 },
  },
  {
    weight: 52,
    zone1: { price: 247256.44, rate: 0.15 },
    zone2: { price: 257479.57, rate: 0.05 },
    zone3: { price: 367007.94, rate: 0.03 },
    zone4: { price: 369441.92, rate: 0.03 },
    zone5: { price: 369928.72, rate: 0.03 },
    zone6: { price: 375283.48, rate: 0.03 },
    zone7: { price: 438511.06, rate: 0.03 },
    zone8: { price: 528868.77, rate: 0.02 },
  },
  {
    weight: 53,
    zone1: { price: 250307.58, rate: 0.15 },
    zone2: { price: 260530.71, rate: 0.05 },
    zone3: { price: 371519.46, rate: 0.03 },
    zone4: { price: 373953.44, rate: 0.03 },
    zone5: { price: 374440.24, rate: 0.03 },
    zone6: { price: 379795, rate: 0.03 },
    zone7: { price: 444201.05, rate: 0.03 },
    zone8: { price: 534840.69, rate: 0.02 },
  },
  {
    weight: 54,
    zone1: { price: 253358.73, rate: 0.15 },
    zone2: { price: 263581.86, rate: 0.05 },
    zone3: { price: 376030.98, rate: 0.03 },
    zone4: { price: 378464.96, rate: 0.03 },
    zone5: { price: 378951.76, rate: 0.03 },
    zone6: { price: 384306.52, rate: 0.03 },
    zone7: { price: 449891.03, rate: 0.03 },
    zone8: { price: 540812.61, rate: 0.02 },
  },
  {
    weight: 55,
    zone1: { price: 256409.87, rate: 0.15 },
    zone2: { price: 266633, rate: 0.05 },
    zone3: { price: 380542.5, rate: 0.03 },
    zone4: { price: 382976.48, rate: 0.03 },
    zone5: { price: 383463.28, rate: 0.03 },
    zone6: { price: 388818.04, rate: 0.03 },
    zone7: { price: 455581.02, rate: 0.03 },
    zone8: { price: 546784.53, rate: 0.02 },
  },
  {
    weight: 56,
    zone1: { price: 259461.02, rate: 0.15 },
    zone2: { price: 269684.15, rate: 0.05 },
    zone3: { price: 385054.02, rate: 0.03 },
    zone4: { price: 387488, rate: 0.03 },
    zone5: { price: 387974.8, rate: 0.03 },
    zone6: { price: 393329.56, rate: 0.03 },
    zone7: { price: 461271.01, rate: 0.03 },
    zone8: { price: 552756.45, rate: 0.02 },
  },
  {
    weight: 57,
    zone1: { price: 262512.16, rate: 0.15 },
    zone2: { price: 272735.29, rate: 0.05 },
    zone3: { price: 389565.54, rate: 0.03 },
    zone4: { price: 391999.52, rate: 0.03 },
    zone5: { price: 392486.32, rate: 0.03 },
    zone6: { price: 397841.08, rate: 0.03 },
    zone7: { price: 466961, rate: 0.03 },
    zone8: { price: 558728.37, rate: 0.02 },
  },
  {
    weight: 58,
    zone1: { price: 265563.31, rate: 0.15 },
    zone2: { price: 275786.44, rate: 0.05 },
    zone3: { price: 394077.06, rate: 0.03 },
    zone4: { price: 396511.04, rate: 0.03 },
    zone5: { price: 396997.84, rate: 0.03 },
    zone6: { price: 402352.6, rate: 0.03 },
    zone7: { price: 472650.99, rate: 0.03 },
    zone8: { price: 564700.3, rate: 0.02 },
  },
  {
    weight: 59,
    zone1: { price: 268614.46, rate: 0.15 },
    zone2: { price: 278837.59, rate: 0.05 },
    zone3: { price: 398588.58, rate: 0.03 },
    zone4: { price: 401022.56, rate: 0.03 },
    zone5: { price: 401509.36, rate: 0.03 },
    zone6: { price: 406864.12, rate: 0.03 },
    zone7: { price: 478340.98, rate: 0.03 },
    zone8: { price: 570672.22, rate: 0.02 },
  },
  {
    weight: 60,
    zone1: { price: 271665.6, rate: 0.15 },
    zone2: { price: 281888.73, rate: 0.05 },
    zone3: { price: 403100.1, rate: 0.03 },
    zone4: { price: 405534.08, rate: 0.03 },
    zone5: { price: 406020.88, rate: 0.03 },
    zone6: { price: 411375.64, rate: 0.03 },
    zone7: { price: 484030.96, rate: 0.03 },
    zone8: { price: 576644.14, rate: 0.02 },
  },
  {
    weight: 61,
    zone1: { price: 274716.75, rate: 0.15 },
    zone2: { price: 284939.88, rate: 0.05 },
    zone3: { price: 407611.62, rate: 0.03 },
    zone4: { price: 410045.59, rate: 0.03 },
    zone5: { price: 410532.4, rate: 0.03 },
    zone6: { price: 415887.16, rate: 0.03 },
    zone7: { price: 489720.95, rate: 0.03 },
    zone8: { price: 582616.06, rate: 0.02 },
  },
  {
    weight: 62,
    zone1: { price: 277767.89, rate: 0.15 },
    zone2: { price: 287991.02, rate: 0.05 },
    zone3: { price: 412123.14, rate: 0.03 },
    zone4: { price: 414557.11, rate: 0.03 },
    zone5: { price: 415043.91, rate: 0.03 },
    zone6: { price: 420398.68, rate: 0.03 },
    zone7: { price: 495410.94, rate: 0.03 },
    zone8: { price: 588587.98, rate: 0.02 },
  },
  {
    weight: 63,
    zone1: { price: 280819.04, rate: 0.15 },
    zone2: { price: 291042.17, rate: 0.05 },
    zone3: { price: 416634.66, rate: 0.03 },
    zone4: { price: 419068.63, rate: 0.03 },
    zone5: { price: 419555.43, rate: 0.03 },
    zone6: { price: 424910.2, rate: 0.03 },
    zone7: { price: 501100.93, rate: 0.03 },
    zone8: { price: 594559.9, rate: 0.02 },
  },
  {
    weight: 64,
    zone1: { price: 283870.18, rate: 0.15 },
    zone2: { price: 294093.31, rate: 0.05 },
    zone3: { price: 421146.18, rate: 0.03 },
    zone4: { price: 423580.15, rate: 0.03 },
    zone5: { price: 424066.95, rate: 0.03 },
    zone6: { price: 429421.72, rate: 0.03 },
    zone7: { price: 506790.92, rate: 0.03 },
    zone8: { price: 600531.82, rate: 0.02 },
  },
  {
    weight: 65,
    zone1: { price: 286921.33, rate: 0.15 },
    zone2: { price: 297144.46, rate: 0.05 },
    zone3: { price: 425657.7, rate: 0.03 },
    zone4: { price: 428091.67, rate: 0.03 },
    zone5: { price: 428578.47, rate: 0.03 },
    zone6: { price: 433933.24, rate: 0.03 },
    zone7: { price: 512480.91, rate: 0.03 },
    zone8: { price: 606503.74, rate: 0.02 },
  },
  {
    weight: 66,
    zone1: { price: 289972.48, rate: 0.15 },
    zone2: { price: 300195.6, rate: 0.05 },
    zone3: { price: 430169.22, rate: 0.03 },
    zone4: { price: 432603.19, rate: 0.03 },
    zone5: { price: 433089.99, rate: 0.03 },
    zone6: { price: 438444.76, rate: 0.03 },
    zone7: { price: 518170.9, rate: 0.03 },
    zone8: { price: 612475.66, rate: 0.02 },
  },
  {
    weight: 67,
    zone1: { price: 293023.62, rate: 0.15 },
    zone2: { price: 303246.75, rate: 0.05 },
    zone3: { price: 434680.74, rate: 0.03 },
    zone4: { price: 437114.71, rate: 0.03 },
    zone5: { price: 437601.51, rate: 0.03 },
    zone6: { price: 442956.28, rate: 0.03 },
    zone7: { price: 523860.88, rate: 0.03 },
    zone8: { price: 618447.58, rate: 0.02 },
  },
  {
    weight: 68,
    zone1: { price: 296074.77, rate: 0.15 },
    zone2: { price: 306297.9, rate: 0.05 },
    zone3: { price: 439192.26, rate: 0.03 },
    zone4: { price: 441626.23, rate: 0.03 },
    zone5: { price: 442113.03, rate: 0.03 },
    zone6: { price: 447467.8, rate: 0.03 },
    zone7: { price: 529550.87, rate: 0.03 },
    zone8: { price: 624419.5, rate: 0.02 },
  },
  {
    weight: 69,
    zone1: { price: 299125.91, rate: 0.15 },
    zone2: { price: 309349.04, rate: 0.05 },
    zone3: { price: 443703.78, rate: 0.03 },
    zone4: { price: 446137.75, rate: 0.03 },
    zone5: { price: 446624.55, rate: 0.03 },
    zone6: { price: 451979.32, rate: 0.03 },
    zone7: { price: 535240.86, rate: 0.03 },
    zone8: { price: 630391.42, rate: 0.02 },
  },
  {
    weight: 70,
    zone1: { price: 302177.06, rate: 0.15 },
    zone2: { price: 312400.19, rate: 0.05 },
    zone3: { price: 448215.3, rate: 0.03 },
    zone4: { price: 450649.27, rate: 0.03 },
    zone5: { price: 451136.07, rate: 0.03 },
    zone6: { price: 456490.84, rate: 0.03 },
    zone7: { price: 540930.85, rate: 0.03 },
    zone8: { price: 636363.34, rate: 0.02 },
  },
];
module.exports = zonedata;
